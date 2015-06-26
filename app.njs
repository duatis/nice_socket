var ioClient = require('socket.io-client');
var app = require('express')();
var http = require('http').Server(app);

http.listen(8080, function(){
  console.log('listening on *:8080');
});

var io = require('socket.io').listen(http);

app.get('/', function(req, res, next){
	res.sendStatus(200);
	res.write('hola');
	res.end();
});

io.on('connection', function(socket){
  console.log('connected');
  var nice_socket = ioClient.connect("http://nice.cleverapps.io");
  nice_socket.on('first_data', function(data){
  		console.log(data);
  		socket.emmit('first_data', data);
  });
});








