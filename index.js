const express = require('express');
const app = express();
const server = app.listen(3000);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('client'))

io.on('connection', (socket) => {
    console.log('a user connected');
});

