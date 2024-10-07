import express, { query, request, response } from 'express';
import exphbs from 'express-handlebars';
import connection from './db/dbconnect.js';
import User from './models/User.js';

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

app.get('/users/create', (request, response) => {
  response.render('adduser');
});

app.post('/users/create', async (request, response) => {
  const name = request.body.name;
  const occupation = request.body.occupation;
  let newsletter = request.body.newsletter;

  if(newsletter === 'on') {
    newsletter = true;
  } else {
    newsletter = false;
  }
  
  await User.create({ name, occupation, newsletter });

  response.redirect('/');
});

connection.sync().then(() => {
  app.listen(3000);
}).catch(error => {
  console.log(error);
});
