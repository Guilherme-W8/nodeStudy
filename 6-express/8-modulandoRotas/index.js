const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const basePath = path.join(__dirname, '/templates');

// Setup para ler o body
app.use(express.urlencoded({
  extended: true,
}));

app.use(express.json());

const usersRoutes = require('./users');
app.use('/users', usersRoutes);

app.get('/', (request, response) => {
  response.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});