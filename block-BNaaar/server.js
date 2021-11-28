var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    if(req.method === 'GET' && req.url === '/') {
        res.end('Welcome to homepage');
    } else if(req.method === 'GET' && req.url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<h2>this all about NodeJS</h2>');
    } else if(req.method === 'POST' && req.url === '/about') {
        res.setHeader('Content-type', 'application/json');
        res.write('message: this is a post request');
        res.end();
    } else {
        res.writeHead('404', {'Content-Type': 'text/html'});
        res.end('<h2>Not Found</h2>');
    }
}

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
})