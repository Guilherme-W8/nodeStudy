const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Qual sua tecnologia favorita?: ', (tecnologia) => {
    console.log(`Minha tecnologia favorita: ${tecnologia}.`);
    readline.close();
})