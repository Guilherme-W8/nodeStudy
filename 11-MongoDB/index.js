import express from 'express';
import exphbs from 'express-handlebars'

const app = express();
app.use(express.JSON());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');