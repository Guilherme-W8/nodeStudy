const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((request, response) => {

    const queryString = url.parse(request.url, true);
    const fileName = queryString.pathname.substring(1);

    if(fileName.includes('html')){
        if(fs.existsSync(fileName)){
            fs.readFile(fileName, (error, data) => {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
        
                return response.end();
            });
        } else {
            fs.readFile('404.html', (error, data) => {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
        
                return response.end();
            });
        }
    }
    
});

const port = 3000;

server.listen(port, () => {
    console.log(`Servidor ligado na porta ${port}`);
});