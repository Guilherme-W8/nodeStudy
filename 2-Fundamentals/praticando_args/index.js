const minimist = require('minimist');

// Externo 
const args = minimist(process.argv.slice(2));

// Interno

const soma = require('./soma.js').soma; 

const a = args["a"];
const b = args["b"];

soma(a, b);
