const calculadora = require('./calculator_module.js'); // Não precisa colocar a extensão
calculadora.soma(13, 20);

/*
    Encapsulando o method soma em uma variavel
*/

const soma = calculadora.soma; // Sem invocar o method com ()
soma(1, 2);
