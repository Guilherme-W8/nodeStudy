const express = require('express');
const router = express.Router();

const path = require('path');
const basePath = path.join(__dirname, '../templates');

router.get('/create', (request, response) => {
  response.sendFile(`${basePath}/userform.html`);
});

router.post('/save', (request, response) => {
  console.log(request.body);

  console.log(`Returning\nNome: ${request.body.name}\nIdade: ${request.body.age}`);
  response.sendFile(`${basePath}/userform.html`);
});

router.get('/:id', (request, response) => {
  const id = request.params.id;
  console.log(`Carregando o identificador único: ${id}`);

  response.sendFile(`${basePath}/users.html`);
});

module.exports = router;
