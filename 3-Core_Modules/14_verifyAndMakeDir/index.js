const fs = require('fs');

if(!fs.existsSync('./minhaPasta')){
	console.log('Não existe!');
	fs.mkdirSync('minhapasta');
} else {
	if(fs.existsSync('./minhaPasta')){
	console.log('Existe!');
    }
}
