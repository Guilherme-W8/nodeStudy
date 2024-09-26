import chalk from 'chalk';
import express from 'express';
import exphbs from 'express-handlebars';
import mysql from 'mysql';

/*
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
*/

const app = express();
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

app.post('/books/register', (request, response) => {
  const title = request.body.title;
  const quantity_page = request.body.quantity_page;
  
  const bookQuery = `INSERT INTO books (title, quantity_page) VALUES ('${title}', '${quantity_page}')`;

  connection.query(bookQuery, (error) => {
    if(error){
      console.log(error);
    } else {
      console.log(chalk.green(`Query success!: > ${title}, ${quantity_page} <`));
    }
  });

  response.redirect('/');
});

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
    console.log(chalk.green('Banco conectado - MySQL'));
  }
});
