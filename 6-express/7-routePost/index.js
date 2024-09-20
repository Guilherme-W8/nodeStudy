const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const basePath = path.join(__dirname, 'templates');

// Setup para ler o body
app.use(express.urlencoded({
  extended: true,
}));

app.use(express.json());

app.get('/users/create', (request, response) => {
  response.sendFile(`${basePath}/userform.html`);
});

app.post('/users/save', (request, response) => {
  console.log(request.body);

  console.log(`Returning\nNome: ${request.body.name}\nIdade: ${request.body.age}`);
  response.sendFile(`${basePath}/userform.html`);
});

app.get('/users/:id', (request, response) => {
  const id = request.params.id;
  console.log(`Carregando o identificador único: ${id}`);

  response.sendFile(`${basePath}/users.html`);
});

app.get('/', (request, response) => {
  response.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});