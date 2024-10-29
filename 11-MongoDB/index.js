import express from 'express';
import exphbs from 'express-handlebars';
import dbConnect from './db/dbConnect.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.listen(3000);