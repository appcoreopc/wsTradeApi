import uWS from 'uWebSockets.js';

const targetPort = 9001;

const app = uWS./*SSL*/App({
    key_file_name: 'misc/key.pem',
    cert_file_name: 'misc/cert.pem',
    passphrase: '1234'
  }).get('/*', (res, req) => {
    res.end('Hello World!');
  }).listen(targetPort, (token) => {
    if (token) {
      console.log('Listening to port ' + targetPort);
    } else {
      console.log('Failed to listen to port ' + targetPort);
    }
  });