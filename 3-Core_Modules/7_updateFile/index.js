const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {

    const urlInfo = require('url').parse(request.url, true);
    const name = urlInfo.query.name;

    const fileNewLine = name + ',\r\n'

    if(!name){
        fs.readFile('./action.html', (error, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
    
            return response.end();
        });
    } else {
        fs.appendFile('arquivo.txt', fileNewLine, (error, data) => {
            response.writeHead(302, {
                Location: '/',
            });

            return response.end();
        });
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Servidor ligado na porta ${port}`);
});