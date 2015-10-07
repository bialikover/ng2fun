var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.emit('connection');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  setInterval(function(){
      socket.emit('sense', randomize());
      console.log(randomize());
  }, 1000);
});


function randomize(){
  return Math.floor((Math.random() * 100) + 1);
}


app.use('/assets', express.static('assets'));

//io.broadcast('')

http.listen(3000, function(){
  console.log('listening on *:3000');
});
