import chalk from 'chalk';
import express, { query, request, response } from 'express';
import exphbs from 'express-handlebars';
import pool from './db/dbconnect.js';

const app = express();
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

app.get('/books', (request, response) => {
  const queryAllBooks = 'SELECT * FROM books';

  pool.query(queryAllBooks, (error, dataBook) => {
    if(error){
      console.log(error);
      return;
    } else {
      const returnedBooks = dataBook;
      console.log('\n' + chalk.green(`Dados retornados com sucesso!\n>\n${JSON.stringify(returnedBooks)}\n<`));
      response.render('books', { returnedBooks });
    }
  });
});

app.get('/books/:id', (request, response) => {
  const id = request.params.id;

  const queryBookID = `SELECT * FROM books WHERE ?? = ?`;
  const dataToQuery = ['id', id];

  pool.query(queryBookID, dataToQuery, (error, dataBook) => {
    if(error){
      console.log(error);
      return;
    } else {
      const returnedBook = dataBook[0];
      console.log('\n' + chalk.green(`Livro retornado com sucesso!\n>\n${JSON.stringify(returnedBook)}\n<`));
      response.render('book', { returnedBook });
    }
  });
});

app.get('/books/edit/:id', (request, response) => {
  const id = request.params.id;

  const queryEdit = `SELECT * FROM books WHERE ?? = ?`;
  const dataToQuery = ['id', id];

  pool.query(queryEdit, dataToQuery, (error, data) => {
    if(error){
      console.log(chalk.red(error));
    } else {
      const book = data[0];
      response.render('editbook', { book });
    }
  });
});

app.get('/', (request, response) => {
  response.render('home');
});

app.post('/books/register', (request, response) => {
  const title = request.body.title;
  const quantity_page = request.body.quantity_page;
  
  const bookQuery = `INSERT INTO books (??, ??) VALUES (?, ?)`;
  const dataToQuery = ['title', 'quantity_page', title, quantity_page];

  pool.query(bookQuery, dataToQuery, (error) => {
    if(error){
      console.log(error);
      return;
    } else {
      console.log(chalk.green(`Query success!: > ${title}, ${quantity_page} <`));
    }
  });

  response.redirect('/books');
});

app.post('/books/updatedbook', (request, response) => {
  const id = request.body.id;
  const title = request.body.title;
  const pages = request.body.quantity_page;

  const queryUpdate = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`;
  const dataToQuery = ['title', title, 'quantity_page', pages, 'id', id];

  pool.query(queryUpdate, dataToQuery, (error) => {
    if(error){
      console.log(chalk.red(error));
      return;
    } else {
      response.redirect('/books');
    }
  });
});

app.post('/books/remove/:id', (request, response) => {
  const id = request.params.id;

  const queryDelete = `DELETE FROM books WHERE ?? = ?`;
  const dataToQuery = ['id', id];

  pool.query(queryDelete, dataToQuery, (error) => {
    if(error){
      console.log(error);
    } else {
      response.redirect('/books');
    }
  });
});

app.listen(3000);
