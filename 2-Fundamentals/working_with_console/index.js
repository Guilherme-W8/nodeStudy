const x = 10;
const y = 'Lorem Ipsum';
const z = [1, 2];

console.log(x, y, z);

// console.count
console.count(`X value ${x}, contagem`);
console.count(`X value ${x}, contagem`);
console.count(`X value ${x}, contagem`);

// console.log com %
console.log('--- {%s} ---', y);

// Limpar console

setTimeout(() => {
    console.clear();
}, 2000);