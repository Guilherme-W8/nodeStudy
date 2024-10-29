import express from 'express';
import exphbs from 'express-handlebars';
import parkingRoutes from './routes/parkingRoutes.js';
import dbConnect from './db/dbConnect.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use('/parking', parkingRoutes);

app.listen(3000);