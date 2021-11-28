var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.headers, req.url);
    res.end('Welcome');
}

server.listen(3000, () => {
    console.log('Listening server on port 3000');
})