import express from 'express';
import exphbs from 'express-handlebars';
import dbConnection from './db/dbConnection.js';
import Task from './models/Tasks.js';

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({
    extended: true,
}));

app.use(express.json());
app.use(express.static('public'));

dbConnection
.sync()
.then(() => {
    app.listen(3000);
})
.catch((error) => {
    console.log(error);
});