const http = require('http');

const server = http.createServer((require, response) => {
    response.write('Learning HTTP Module on Node.JS');
    response.end();
});

const port = 3000;

server.listen(port, () => {
    console.log(`Servidor ligado na porta ${port}`);
});