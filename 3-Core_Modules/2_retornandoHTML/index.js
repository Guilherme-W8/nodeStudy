const http = require('http');

const server = http.createServer((require, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>First server returning HTML with Node.js</h1>');
});

const port = 3000;

server.listen(port, () => {
    console.log(`Servidor ligado na porta ${port}`);
});