const express = require('express')
const app = express()

const {createServer} = require('http')

const {Server} = require('socket.io')

const cors = require('cors')

const server = createServer(app)

const io = new Server(server , {cors :{
    origin : "http://localhost:3000/",
    method : ["POST" , "GET"],
    credentials : true

}})

app.get('/', (req, res) => {
    res.send('Hlo world its socketio Practise Session')
})

const cnsp = io.of('/custom')

cnsp.on('connect',(socket)=>{
    console.log('Socket Connected : ', socket.id);

    socket.on('welcome',(data)=>{
      socket.emit('welcomeUser',data)
      socket.broadcast.emit('welcomeAll' , `${data} has Joined the chat group`)
    })

})

server.listen(2121 , ()=>{
    console.log('Server Running on port 2121');
})