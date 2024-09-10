import chalk from 'chalk';

const nota = 10;


if(nota >= 6)
    console.log(chalk.green.bgBlack("Você foi aprovado"));
else
    console.log(chalk.red.bgWhite("Você foi reprovado"));