const express = require('express');

const Router = require('./router.js');

const server = express();

server.use(express.json());
server.use('/api/posts', Router);

server.get('/', (req, res) => {
    res.send(`
        <h1>webapi-ii-challenge</h1>
        <p>POSTMAN to the rescue!</p>
    `);
});

module.exports = server;
