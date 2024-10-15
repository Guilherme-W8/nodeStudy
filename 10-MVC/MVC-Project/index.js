import express from 'express';
import exphbs from 'express-handlebars';
import dbConnection from './db/dbConnection.js';
import Task from './models/Tasks.js';
import tasksRoutes from './routes/tasksRoutes.js';

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({
    extended: true,
}));

app.use(express.json());
app.use(express.static('public'));
app.use('/tasks', tasksRoutes);

dbConnection
.sync()
.then(() => {
    app.listen(3000);
})
.catch((error) => {
    console.log(error);
});