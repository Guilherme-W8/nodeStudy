const express = require('express');
const exphbs = require('express-handlebars');  // Nova forma de importar o express-handlebars
const port = 3000;

const app = express();

// Configurando o Handlebars
app.engine('handlebars', exphbs.engine());  // Agora usamos 'engine()' ao inves de 'exphbs()'
app.set('view engine', 'handlebars');

app.get('/dashboard', (request, response) => {

  const items = ['1 - Guilherme', '2 - Laís', '3 - Sandra'];
  response.render('dashboard', { items });
});

app.get('/post', (request, response) => {
  const post = {
    title: 'Learning Node.js',
    category: 'ECMAScript',
    body: 'Artigo para aprendizado de Node.JS',
    comments: 4
  }

  response.render('blogpost', { post });
});

app.get('/', (request, response) => {

  const favoriteNumber = 33;

  const user = {
    name: 'Guilherme',
    surname: 'Correia'
  }

  const auth = true;
  const approved = true; 

  response.render('home', { user: user, favoriteNumber, auth, approved });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});