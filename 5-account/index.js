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

            switch (action) {
                case 'Criar conta':
                    createAccount();
                    buildAccount();
                    break;

                case 'Consultar saldo':
                    break;

                case 'Depositar':
                    break;

                case 'Sacar':
                    break;
                
                case 'Sair':
                    console.log(chalk.bgBlue.black('Obrigado por usar o Account!'));
                    process.exit();
            }
        })
        .catch((error) => console.log(error));
}

operation();

// Criar conta
function createAccount() {
    console.log(chalk.bgGreen.black('Obrigado por escolher nosso banco!'));
    console.log(chalk.green('Defina as configuracoes da conta a seguir'));
}

// Construir conta
function buildAccount() {
    
    inquirer
        .prompt([{
            name: 'accountName',
            message: 'Nome da conta: '
        }])
        .then(answers => {
            const accountName = answers['accountName'];
            console.info(accountName);

            if(!fs.existsSync('accounts')){
                fs.mkdirSync('accounts');
            } else if(fs.existsSync(`accounts/${accountName}.json`)){
                console.log(chalk.bgRed.black('Nome de conta indisponível, escolha outro.'));
                buildAccount();
                return;
            }

            fs.writeFileSync(
                `accounts/${accountName}.json`, 
                '{"balance": 0}',
                (error) => console.log(error)
            ) 
                
            console.log(chalk.green('Conta criada com sucesso!'))
            operation();
        })
        .catch(error => console.log(error));
}