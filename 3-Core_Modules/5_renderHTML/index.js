const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    fs.readFile('./render.html', (error, data) => {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);

        return response.end();
    });
});

const port = 3000;

server.listen(port, () => {
    console.log(`Servidor ligado na porta ${port}`);
});