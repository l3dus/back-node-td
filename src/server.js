const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();
//conexão com banco mongoDb
mongoose.connect('mongodb+srv://xpado:d12m11t5r6@cluster0-udupc.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);