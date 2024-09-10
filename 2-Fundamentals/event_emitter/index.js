const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('Segundo');
});

console.log('Primeiro');

eventEmitter.emit('start');

console.log('Terceiro');