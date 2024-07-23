console.log(process.argv);

const args = process.argv.slice(2);
console.log(args);

// Cantor
const nome = args[0].split('=')[1];
console.log(nome);

// Musica
const musica = args[1].split('=')[1];
console.log(musica);

// Interpolation
console.log(`${nome} - ${musica}`);
