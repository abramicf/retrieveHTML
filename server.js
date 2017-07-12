const express = require('express');
const server = express();
const portNum = 3000;

server.post('/', (req, res) => {
  res.send('Post Request Works!');
});
server.get('/', (req, res) => {
  res.send('Get Request Works!');
});

server.listen(portNum, () => {
  console.log('Server listening on Port' + portNum);
});

