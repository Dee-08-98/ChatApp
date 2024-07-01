const express = require('express')
const {createServer} = require('http')
const {Server} = require('socket.io')
const cors = require('cors')
const app = express()
const server = createServer(app)


const datas = [{}]

const io = new Server(server,{
    cors : {
        origin :'http://localhost:3000',
        methods : ["GET","POST"],
        credentials : true
    }
})

app.get('',(req,res)=>{
    res.send('hi socket io ')
})
io.on('connection',(socket)=>{
    console.log('socket connected sucessfull',socket.id);

    socket.on('joined',({data})=>{
      

        datas[socket.id] = data

         console.log( datas[socket.id],' you joined the app ');

         socket.emit('welcome' , {admin: datas[socket.id],message : "Welcome in chat app"})


         socket.broadcast.emit('userJoined',{admin: datas[socket.id],message : "has Joined"})   
    })

    socket.on('message',({message,ID})=>{
        io.emit('send',{admin: datas[socket.id],message , ID})
    })
   
    socket.on('disconnect',()=>{
        socket.broadcast.emit('left',{admin: datas[socket.id],message : "has left"})
        console.log(datas[socket.id],'user left');
    })
   
})

server.listen(5566,()=>{
    console.log('Server is running on port 5566 sucessfully');
})