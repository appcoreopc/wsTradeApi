import { WSAEACCES } from 'node:constants';
import uWS from 'uWebSockets.js';

const targetPort = 9001;

const app = uWS./*SSL*/App({
  key_file_name: 'misc/key.pem',
  cert_file_name: 'misc/cert.pem',
  passphrase: '1234'
})
// .ws('/*', {
//     /* There are many common helper features */
//     idleTimeout: 30,
//     maxBackpressure: 1024,
//     maxPayloadLength: 512,

//     // /* For brevity we skip the other events (upgrade, open, ping, pong, close) */
//     // message: (ws, message, isBinary) => {
//     //   /* You can do app.publish('sensors/home/temperature', '22C') kind of pub/sub as well */
//     //   console.log('getting message');
//     //   console.log(message);
//     //   /* Here we echo the message back, using compression if available */
//     //   //let ok = ws.send(message, isBinary, true);
//     //   //ws.publish('equitytrade', message, isBinary);
//     // },
//     // open: (ws) => {
//     //      // 
//     //      //ws.subscribe('equitytrade');
//     //      console.log('on open! ');
//     // },
//   })
  .get('/equitytrade', (res, req) => {
    console.log('equity trade');
    res.end('trade equity');
  })
  .get('/news', (res, req) => {
    console.log('news ddddd');

    for (let index = 0; index < 1000; index++) {
      res.write("hellllllo");      
    }

    res.end('news');
  })
  .get('/bitcoin', (res, req) => {
    console.log('bitcoin');
    res.end('bitcoin!');
  })
  .get('/forex', (res, req) => {
    res.end('forex');
  })
  .get('/*', (res, req) => {
    console.log('nothing to see');
    res.end('nothing to see');
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
