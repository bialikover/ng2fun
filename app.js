var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var five = require("johnny-five");
var board = new five.Board();

/*
board.on("ready", function() {
	var proximity = new five.Proximity({
		controller: "HCSR04",
		pin: 7
	});
	io.on('connection', function(socket){
	  console.log('a user connected');
	  socket.emit('connection');
	  socket.on('disconnect', function(){
		  console.log('user disconnected');
	  });

		proximity.on("data", function() {
		//	console.log(this.cm + "cm", this.in + "in");
		});

		proximity.on("change", function() {
			console.log("emitting...." +  this.cm);
			socket.emit('sense', this.cm);
		});
	});
});
*/
app.use('/assets', express.static('assets'));
app.use('/src', express.static('src'));
app.use('/node_modules', express.static('node_modules'));

http.listen(3000, function(){
  console.log('listening on *:3000');
});
app.get('/', function(req, res){
  res.sendFile(__dirname + '/src/index.html');
});
