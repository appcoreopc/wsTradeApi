import * as uWS from 'uws';

const targetPort = 9001;

const wsServer = new uWS.Server({port : targetPort});


wsServer.on('connection', function(ws) {
    console.log('connection !');

   
    ws.on('message', function(mess){console.log('message : '+mess); });

    ws.on('error', function(error) {
        console.log('Cannot start server');
    });

    ws.on('close', function(code, message) {
            console.log('Disconnection: ' + code + ', ' + message);
        //    clearInterval(ws.timer);
            });

    //ws.on('pong',function(mess) { console.log(ws.id+' receive a pong : '+mess); });

    //ws.timer=setInterval(function(){pingpong(ws);},1000);

});
