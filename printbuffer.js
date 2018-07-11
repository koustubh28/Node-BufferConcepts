var http = require('http');
var fs = require('fs');

http.createServer(function(req,res) {
	var buf;
	res.writeHead(200,{"Content-Type":"text/html"});
	fs.readFile("index.html",function(err,data) {
		buf = new Buffer(255);
		buf.write(data.toString());
		console.log(buf);
		res.end(buf);
	});
}).listen(8080,"localhost",function() {
	console.log("Server running on http://localhost:8080");
});