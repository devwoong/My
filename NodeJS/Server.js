var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end('Hello World!');
    var q = url.parse(req.url, true).query;
}).listen(8080);