const express = require('express');
const { engine } = require('express-handlebars');  // Nova forma de importar o express-handlebars
const port = 3000;

const app = express();

// Configurando o Handlebars
app.engine('handlebars', engine());  // Corrigido: agora usamos 'engine()' e não 'exphbs()'
app.set('view engine', 'handlebars');

app.get('/', (request, response) => {
  response.render('home', { layout: false });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});