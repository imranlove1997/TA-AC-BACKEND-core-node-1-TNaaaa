var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Welcome');
}

server.listen(4444, () => {
    console.log('Server is listening on port 4444');
})