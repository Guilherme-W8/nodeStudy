const express = require('express');
const exphbs = require('express-handlebars');  // Nova forma de importar o express-handlebars
const port = 3000;

const app = express();

// Configurando o Handlebars
app.engine('handlebars', exphbs.engine());  // Agora usamos 'engine()' ao inves de 'exphbs()'
app.set('view engine', 'handlebars');

app.get('/', (request, response) => {
  response.render('home');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});