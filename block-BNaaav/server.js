var http = require('http');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    if(req.method === 'GET' && req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('index.html').pipe(res);
    } else if(req.method === 'GET' && req.url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('about.html').pipe(res);
    } else if(req.url.split('.').pop() === 'css') {
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream('./style.css').pipe(res);
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
}

server.listen(3000, () => {
    console.log('Listening server on port 3000');
})