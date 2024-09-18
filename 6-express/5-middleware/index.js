const express = require('express');
const app = express();
const port = 3000;

const checkAuth = function(request, response, next){
  request.checkAuth = true;

  if(request.checkAuth) {
    console.log('User logado!');
    next();
  } else {
    console.log('User deslogado!');
    next();
  }
}

app.use(checkAuth);
const path = require('path');
const basePath = path.join(__dirname, 'templates');

app.get('/', (request, response) => {
  response.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});