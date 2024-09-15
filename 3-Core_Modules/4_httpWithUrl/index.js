const http = require('http');

const server = http.createServer((request, response) => {
    const urlInfo = require('url').parse(request.url, true);
    const name = urlInfo.query.name;

    response.writeHead(200, 'Content-Type', 'text/html');

    if(!name){
        response.end(
        `<h1>Preencha com seu nome: </h1>
            <form method="GET">
                <input type="text" name="name"/>
                <input type="submit" value="Enviar"/>
            </form>
        `);
    } else {
        response.end(`Seja bem-vindo ${name}!`);
    }
    
});

const port = 3000;

server.listen(port, () => {
    console.log(`Servidor ligado na porta ${port}`);
});