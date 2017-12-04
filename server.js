var static = require('node-static');
var file = new static.Server('./UI');
//var mosca = require('mosca');
//vars
var deviceCount=0;
var channels=[];

var settings = {
  port: process.env.PORT || 9999
};


//Define
var server = require('http').createServer(function(request, response) {
    request.addListener('end', function() {
        file.serve(request, response);
    }).resume();
});

server.listen(process.env.PORT || 9999);
console.log("Server Started");
/*var ms = new mosca.Server(settings);

ms.on('clientConnected', function(client) {
   console.log('client connected', client.id);
});

ms.on('published', function(packet, client) {
  console.log('Published', packet.topic, packet.payload);
});

server.on('clientDisconnected', function(client) {
console.log('Client Disconnected:', client.id);
});
ms.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}
*/
