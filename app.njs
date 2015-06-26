var ioClient = require('socket.io-client');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);


io.on('connection', function(socket){
  var nice_socket = ioClient.connect("http://nice.cleverapps.io");
  nice_socket.on('first_data', function(data){
  		socket.emmit('first_data', data);
  });
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});






