const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    console.log(params);

    if (page !== '/') {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404 page not found</h1>');
    }
    else if ('firstname' in params && 'lastname' in params) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<h1>Hello ${params.firstname} ${params.lastname}</h1>`);
    }
    else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Hello Anonymous !!!</h1>');
    }
    res.end()
});

server.listen(8080);