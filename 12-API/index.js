import express from 'express';
const app = express();

// Middlewares
app.use(express.urlencoded({
    extended: true,
}));

app.use(express.json());

// Rotas - Endpoints
app.get('/', (request, response) => {
    response.json({
        message: 'Hello World! - Primeira rota da API'
    });
});

// Listen PORT
app.listen(3000);