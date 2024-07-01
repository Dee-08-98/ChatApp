
const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const app = express()

const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
})

app.get('/', (req, res) => {
    res.send('Working on socket io')
})

io.on("connection", (socket) => {
    console.log('Socket Connected', socket.id);

    socket.on('welcome',(data)=>{
        console.log(data);
        socket.broadcast.emit('broad',data)
    })

})

server.listen(2525, () => {
    console.log('Server is running sucessfully');
})



