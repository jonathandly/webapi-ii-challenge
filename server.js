const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`
        <h1>webapi-ii-challenge</h1>
        <p>POSTMAN to the rescue!</p>
    `);
});

module.exports = server;
