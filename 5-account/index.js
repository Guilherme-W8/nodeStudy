// Externo
const chalk = require('chalk');
const inquirer = require('inquirer');

// Interno
const fs = require('fs');
console.log('Hello world! - Account');

function operation() {

    inquirer
        .prompt([{
            type: 'list', // Tipo do prompt
            name: 'action', // Nome para referencia
            message: 'O que você deseja fazer?',
            choices: ['Criar conta', 'Consultar saldo', 'Depositar', 'Sacar', 'Sair']
        }])
        .then((answers) => {
            const action = answers['action'];
            console.log(action);
        })
        .catch((error) => console.log(error));
}

operation();