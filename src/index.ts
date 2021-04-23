import uWS from 'uWebSockets.js';

const targetPort = 9001;
const app = uWS./*SSL*/App({
  key_file_name: 'misc/key.pem',
  cert_file_name: 'misc/cert.pem'
})
  .ws('/*', {
    /* There are many common helper features */
    idleTimeout: 30,
    maxBackpressure: 1024,
    maxPayloadLength: 512,
    // /* For brevity we skip the other events (upgrade, open, ping, pong, close) */
    message: (ws, message, isBinary) => {
      /* You can do app.publish('sensors/home/temperature', '22C') kind of pub/sub as well */
      console.log('broadcasting message:' + new Date().getDate());
      console.log(message);     
      ws.publish('trade', message, isBinary);
    },
    open: (ws) => {
      ws.subscribe('trade');
      console.log('client connected, setting up trade subscriptions.');
    },
  })  
  .listen(targetPort, (token) => {
    if (token) {
      console.log('Listening to port ' + targetPort);
    } else {
      console.log('Failed to listen to port ' + targetPort);
    }
  });

/*
  - news / corporate info
  - equity trade
  - bitcoin trader
  - bonds
  - currency
  - historical trades (stream from file)
  - histtorical open, high, low, close
*/
