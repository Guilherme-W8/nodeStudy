const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
console.log(args);

const name = args['nome'];
const ocupation = args['profissao'];

console.log(`${name} | ${ocupation} - Senior`);
