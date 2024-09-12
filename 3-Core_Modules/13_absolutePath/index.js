const path =  require('path');

// path absoluto
console.log(path.resolve('teste.txt'));

// path dinâmico
const midFolder = 'relatorios';
const fileName = 'guilherme.txt';

const finalPath = path.join("/", 'arquivos', midFolder, fileName);
console.log(finalPath); 