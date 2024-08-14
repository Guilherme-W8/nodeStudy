import inquirer from 'inquirer';

inquirer.prompt([{
    name: 'first',
    message: 'Write first note: '
}, 
{
    name: 'second',
    message: 'Write second note: '
},

]).then((answers) => {
    console.log(`Average: ${(parseInt(answers.first) + parseInt(answers.second)) / 2}.`);
}).catch((error) => console.log(error));