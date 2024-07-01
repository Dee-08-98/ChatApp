const express = require('express')
const app = express()

const {createServer} = require('http')
const server = createServer(app)

const {Server} = require('socket.io')
const cors = require('cors')

const io = new Server(server , {cors : {
    origin : "http://localhost:3000",
    method : ['GET',"POST"],
    credentials : true
}})

app.get('/',(req,res)=>{
    res.send('Hlo socket.io')
})

io.on('connect',(socket)=>{
    console.log(' Backend Server Connected : ', socket.id);

    socket.emit('welcome',`Welcome to the user ${socket.id}`)

    socket.broadcast.emit('welcomeAll',` ${socket.id} has joined the app`)

    // *************************

    socket.on('messag',({message , room})=>{
        // io.emit('msgAll', message)
        io.to(room).emit('msgAll', message)


    })

    // ****************************

       

})

const port = 8552

server.listen(port , ()=>{
    console.log('Server is running on port ',port);
})