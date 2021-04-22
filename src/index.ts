import uWS from 'uWebSockets.js';

const targetPort = 9001;

const app = uWS./*SSL*/App({
    key_file_name: 'misc/key.pem',
    cert_file_name: 'misc/cert.pem',
    passphrase: '1234'
  })
  .ws('/*', {

    /* There are many common helper features */
    idleTimeout: 30,
    maxBackpressure: 1024,
    maxPayloadLength: 512,
  
    /* For brevity we skip the other events (upgrade, open, ping, pong, close) */
    message: (ws, message, isBinary) => {
      /* You can do app.publish('sensors/home/temperature', '22C') kind of pub/sub as well */
      
      /* Here we echo the message back, using compression if available */
      let ok = ws.send(message, isBinary, true);
    }    
  })  
  .get('/*', (res, req) => {
    res.end('Hello World!');
  }).listen(targetPort, (token) => {
    if (token) {
      console.log('Listening to port ' + targetPort);
    } else {
      console.log('Failed to listen to port ' + targetPort);
    }
  });