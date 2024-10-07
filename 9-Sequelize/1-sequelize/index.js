import chalk from 'chalk';
import express, { query, request, response } from 'express';
import exphbs from 'express-handlebars';
import connection from './db/dbconnect.js';

const app = express();
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

app.get('/', (request, response) => {
  response.render('home');
});

app.listen(3000);
