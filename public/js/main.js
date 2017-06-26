var socket = io();//We can do this becasue we imported socket
$("form").submit(function(){
	socket.emit('chat message', $("#messageField").val());
	$("#messageField").val("");
	return false;
});

socket.on('chat message', function(msg){
	console.log(msg);
	$("#messages").append($("<li>").text(msg));
});