import express, { query, raw, request, response } from 'express';
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

app.post('/users/delete/:id', async (request, response) => {

  const id = request.params.id;
  
  await User.destroy(
    {
      where: {
        id: id
      }
    }
  );

  response.redirect('/');
});

app.get('/users/edit/:id', async (request, response) => {

  const id = request.params.id;
  
  const user = await User.findOne(
    {
      raw: true,
      where: {
        id: id
      }
    }
  );

  response.render('useredit', { user });
});

app.get('/', async (request, response) => {

  const users = await User.findAll({raw: true});
  console.log(users);

  response.render('home', { users: users });
});

app.get('/users/:id', async (request, response) => {
  const id = request.params.id;

  const user = await User.findOne(
    {
      raw: true,
      where: {
        id: id
      }
    }
  );

  response.render('userview', { user });
});

connection.sync().then(() => {
  app.listen(3000);
}).catch(error => {
  console.log(error);
});
