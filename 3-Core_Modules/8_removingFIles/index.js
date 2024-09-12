const fs = require('fs');

fs.unlink('arquivo.txt', (error) => {
    if(error){
        console.log(error);
        return;
    } else {
        console.log('Arquivo removido com sucesso!');
    }
});