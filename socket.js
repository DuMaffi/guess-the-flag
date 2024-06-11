/*client.js*/
const io = require('socket.io-client');

const socket = io('https://guesstheflag.webpubsub.azure.com', {
  path: '/clients/socketio/hubs/Hub',
});

// Receives a message from the server
socket.on('hello', (arg) => {
  console.log(arg);
});

// Sends a message to the server
socket.emit('howdy', 'stranger');
