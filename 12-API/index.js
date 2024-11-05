import express from 'express';
const app = express();

// Middlewares
app.use(express.urlencoded({
    extended: true,
}));

app.use(express.json());

// Rotas - Endpoints
app.post('/createcompany', (request, response) => {
    const name = request.body.name;
    const employeeQuantity = request.body.employeeQuantity;

    // Error status
    if (!name) {
        return response.status(422).json({ message: 'Campo nome é obrigatório!' });
    }

    console.log(name);
    console.log(employeeQuantity);

    return response.status(201).json({ message: `Empresa ${name} adicionada com sucesso!` });
});

app.get('/', (request, response) => {
    return response.json({
        message: 'Hello World! - Primeira rota da API'
    });
});

// Listen PORT
app.listen(3000);