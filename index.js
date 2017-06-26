var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);//IO is how we communicate with clients
//Tell the server where to run on host


app.use(express.static(__dirname + '/public'));


app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html")
});

//Use express to serve up static files besides index so page can be pretty
app.use(express.static(__dirname+"/public"));



io.on('connection',function(socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});



http.listen(3000, function(){
	console.log("listening on *:3000");
});