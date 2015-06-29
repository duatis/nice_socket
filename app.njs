
var ioClient = require('socket.io-client');
var app = require('express')();
var server = require('http').createServer(app);
var cors 	= require('cors');
var io;


app.use(cors());

server.listen(8080);


io = require('socket.io').listen(server);

app.get('/', function(req, res, next){
	res.sendStatus(200);
	res.write('hola');
	res.end();
});

io.on('connection', function(socket){
  console.log('connected');
  socket.emit('first_data', {hola: 'mundo'}});
  var nice_socket = ioClient.connect("http://nice.cleverapps.io");
  nice_socket.on('first_data', function(data){
  		console.log(data);
  		socket.emit('first_data', data);
  });
});








