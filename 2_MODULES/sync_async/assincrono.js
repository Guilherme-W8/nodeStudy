const fs = require('fs');

console.log('Start');

fs.writeFile('archive.txt', 'Hello', (error) => {
    setTimeout(() => {
        console.log('Created archive');
    }, 1000);
});

console.log('End');