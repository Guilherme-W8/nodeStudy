const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const app = express();
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.render('home');
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql'
});

connection.connect((error) => {
  if(error){
    console.log(error);
  } else {
    app.listen(3000);
    console.log('Banco conectado - MySQL');
  }
});
