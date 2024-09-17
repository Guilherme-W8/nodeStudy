// Externo
const chalk = require('chalk');
const inquirer = require('inquirer');

// Interno
const fs = require('fs');
const { error } = require('console');
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
                    getAccountBalance();
                    break;

                case 'Depositar':
                    deposit();
                    break;

                case 'Sacar':
                    withdraw();
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

function checkAccount(accountName) {
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Essa conta não existe!'));
        return false;
    }

    return true;
}

function addAmount(accountName, quantidadeDeposito) {
    const accountData = getAccount(accountName);

    if(!quantidadeDeposito){
        console.log(chalk.bgRed.black('Ocorre uma falha.'));
        return deposit();
    }

    accountData.balance = parseFloat(quantidadeDeposito) + parseFloat(accountData.balance);
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        (error) => console.log(error)
    )

    console.log(chalk.green(`Foi adicionado o valor R$${quantidadeDeposito} a sua conta.`));
}

function removeAmount(accountName, saque) {
    const accountData = getAccount(accountName);

    if(!saque){
        console.log(chalk.bgRed.black('Ocorre uma falha.'));
        return withdraw();
    }

    if(accountData.balance < saque){
        console.log(chalk.bgRed.black('Valor indisponivel na conta.'));
        return withdraw();
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(saque);

    fs.writeFileSync(
        `accounts/${accountName}.json`, 
        JSON.stringify(accountData),
        (error) => console.log(error)
    )

    console.log(chalk.green('Saque bem sucedido!'));
    operation();
}

function withdraw() {
    inquirer
        .prompt([{
            name: 'accountName',
            message: 'Qual nome da sua conta?> '
        }])
        .then((answer) => {
            const accountName = answer['accountName'];

            if(!checkAccount(accountName)){
                return withdraw();
            }

            inquirer.prompt([{
                name: 'saque',
                message: 'Quanto voce deseja sacar?> '
            }])
            .then((answer) => {
                const saque = answer['saque'];

                removeAmount(accountName, saque);
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf-8',
        flag: 'r'
    });

    return JSON.parse(accountJSON);
}

function getAccountBalance() {
    
    inquirer
        .prompt([{
            name: 'accountName',
            message: 'Qual nome da sua conta?> '
        }])
        .then((answer) => {
            const accountName = answer['accountName'];
            
            if(!checkAccount(accountName)){
                return getAccountBalance();
            }

            const accountData = getAccount(accountName)
            console.log(chalk.bgBlue.black(`Valor atual da sua conta: ${accountData.balance}`));
            operation();
        })
        .catch((error) => console.log(error));
}

// Adicionar valor a uma conta
function deposit() {

    inquirer
        .prompt([{
            name: 'accountName',
            message: 'Digite o nome da sua conta: '
        }])
        .then((answers) => {
            const accountName = answers['accountName'];

            // Verificar se a conta existe
            if(!checkAccount(accountName)){
                return deposit();
            }

            inquirer.prompt([{
                name: 'quantidadeDeposito',
                message: 'Qual valor voce deseja depositar?> '
            }])
            .then((answer) => {
                const quantidadeDeposito = answer['quantidadeDeposito'];
                addAmount(accountName, quantidadeDeposito);
                operation();
            })
            .catch(error => console.log(error));
        })
        .catch((error) => console.log(error));
}