var sam=require('http')
sam.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Hello worlds!');
	res.end()
}).listen(8080);