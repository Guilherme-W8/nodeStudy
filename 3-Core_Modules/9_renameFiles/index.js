const fs = require('fs');

fs.rename('arquivo.txt', 'renamedArquivo.txt', (error) => {
    if(error){
        console.log(error);
        return;
    } else {
        console.log('Arquivo renomeado com sucesso!');
    }
});