var http = require('http');
var url = require('url');

// Q1
// http.createServer((request, response) => {
//     console.log(request, response);
// }).listen(5000, 'localhost');

var server = http.createServer(handleRequest);

// Q2
// function handleRequest(req, res) {
//     res.end('My first server in NodeJS');
// }
// server.listen(5100);

// Q3
// function handleRequest(req, res) {
//     console.log(req.header);
//     res.end();
// }
// server.listen(5555);

// Q4
// function handleRequest(req, res) {
//     console.log(req.method, req.url);
//     res.end();
// }
// server.listen(5566);

// // Q5
// function handleRequest(req, res) {
//     req.header;
//     res.end();
// }
// server.listen(7000, () => {
//     console.log('server listening on port 7000');
// })

// Q6
// function handleRequest(req, res) {
//     res.statusCode = 202;
//     res.end();
// }
// server.listen(3333);

// Q7
// function handleRequest(req, res) {
//     res.setHeader('Content-Type', 'type/html');
//     res.end('<h3>Welcome to altcampus</h3>');
// }
// server.listen(8000);

// Q8
// function handleRequest(req, res) {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(`[{success: true, message: 'Welcome to Nodejs'}]`);
// }
// server.listen(8888);

// Q9
// function handleRequest(req, res) {
//     if(req.method === 'POST' && req.url === '/') {
//         res.setHeader('Content-Type', 'text/html');
//         res.end('<h2>posted for first time</h2>');
//     } else {
//         res.end('Error');
//     }
// }
// server.listen(5050);

// Q10
// function handleRequest(req, res) {
//     if(req.method === 'GET' && req.url === '/') {
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Altcampus');
//     } else if(req.method === 'GET' && req.url === '/about') {
//         res.setHeader('Content-Type', 'text/html');
//         res.end('<h2>Altcampus</h2>');
//     } else {
//         res.statusCode = 404;
//         res.end('Not Found');
//     }
// }
// server.listen(2345);

// Q11
// function handleRequest(req, res) {
//     if(req.method === 'GET' && req.url === '/users') {
//     res.setHeader('Content-Type', 'text/html');
//     res.write(`<input type='text' placeholder='name'`);
//     res.end(`<input type='email' placeholder='email'`);
//     } else if(req.method === 'POST' && req.url === '/users') {
//         res.end('Posted for the second time');
//     } else {
//         res.end('404 not found');
//     }
// }
// server.listen(2345);

// Q12
function handleRequest(req, res) {
    let parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl.pathname, parsedUrl.query.email);
    res.setHeader('Content-Type', 'application/json');
    res.end(`[{email:${parsedUrl.query.email}}]`);
}
server.listen(2345);