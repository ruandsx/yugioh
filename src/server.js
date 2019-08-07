const express = require('express');

const server = express();

const game = require('./game.js');

//GET, POST, PUT, DELETE

server.get('/', (req, res) => {
  
  return res.json({ message: `Requisicao: ${req.query}` });
});

server.listen(3333);