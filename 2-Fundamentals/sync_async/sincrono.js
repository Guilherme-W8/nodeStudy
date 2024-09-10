const fs = require('fs');

console.log('Start');
fs.writeFileSync('archive.txt', 'Hello');
console.log('End');