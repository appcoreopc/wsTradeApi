import { WSAEACCES } from 'node:constants';
import uWS from 'uWebSockets.js';
import fs from 'fs';

const port = 9001;
const fileName = './test.data';
const videoFile = toArrayBuffer(fs.readFileSync(fileName));
const totalSize = videoFile.byteLength;

console.log('WARNING: NEVER DO LIKE THIS; WILL CAUSE HORRIBLE BACKPRESSURE!');
console.log('Video size is: ' + totalSize + ' bytes');

/* Helper function converting Node.js buffer to ArrayBuffer */
function toArrayBuffer(buffer: Buffer) {
    return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}

/* Yes, you can easily swap to SSL streaming by uncommenting here */
const app = uWS.App({
    //key_file_name: 'misc/key.pem',
    //cert_file_name: 'misc/cert.pem',
    //passphrase: '1234'
}).get('/*', (res, req) => {
    res.end('Nothing to see here!');
}).listen(port, (token) => {
    if (token) {
        console.log('Listening to port ' + port);
    } else {
        console.log('Failed to listen to port ' + port);
    }
});