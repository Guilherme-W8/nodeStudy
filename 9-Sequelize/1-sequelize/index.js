import express, { query, raw, request, response } from 'express';
import exphbs from 'express-handlebars';
import connection from './db/dbconnect.js';

// Tables
import User from './models/User.js';
import Address from './models/Address.js';

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

app.post('/users/update', async (request, response) => {

  const id = request.body.id;
  const name = request.body.name;
  const occupation = request.body.occupation;
  let newsletter = request.body.newsletter;

  if(newsletter === 'on') {
    newsletter = true;
  } else {
    newsletter = false;
  }

  const userData = {
    id,
    name,
    occupation,
    newsletter
  };

  await User.update(userData, 
    {
      where: {
        id: id
      }
    }
  );
 
  response.redirect('/');

});

app.post('/address/create', async (request, response) => {
  const UserId = request.body.UserId;
  const street = request.body.street;
  const number = request.body.number;
  const city = request.body.city;

  const address = {
    UserId,
    street,
    number,
    city
  };

  await Address.create(address);

  response.redirect(`/users/edit/${UserId}`);
});


app.get('/users/edit/:id', async (request, response) => {

  const id = request.params.id;
  try {
    const user = await User.findOne(
      {
        include: Address,
        where: {
          id: id
        }
      }
    );
  
    response.render('useredit', { user: user.get({ plain: true }) });
  } catch (error) {
    console.log(error);
  }
  
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
