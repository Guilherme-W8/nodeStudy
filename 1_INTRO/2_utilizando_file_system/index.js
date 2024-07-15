const fs = require('fs');

fs.readFile('arquivo.txt', 'utf-8', (error, data) => {
    if(error)
        console.log(error);
    else
        console.log(data);

    console.log('\nDesenvolvedor responsável\n- Guilherme Correia');
});