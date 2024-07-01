const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const app = express()


const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"],
        credentials: true
    }
})

app.get('/', (req, res) => {
    res.send('Hlo world')
})

io.on('connection', (socket) => {
    console.log('socket Connected', socket.id);
    socket.on('welcome', (data) => {
        console.log(data);
    })
    
    // *****************

    socket.on('msg', ({message,room}) => {
        console.log(message);
        // io.emit('send-msg-all',data)
        io.to(room).emit('send-msg-all',message)

    })
})

server.listen(3222, () => {
    console.log('Server running sucessfully');
})