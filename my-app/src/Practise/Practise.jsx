import React, { useEffect, useMemo } from 'react';
import {io , Manager} from 'socket.io-client'
function Practise(props) {
    const manager = new Manager("http://localhost:2121/")

    const socket = useMemo(()=>manager.socket('/custom'),[])

    useEffect(()=>{
        socket.on('connect',()=>{
            console.log('FrontEnd Socket Connection', socket.id);
        })

        socket.emit('welcome', 'Welcome user Deepak Jha')
        socket.on('welcomeUser',(data)=>{
            console.log(data);
        })

        socket.on('welcomeAll',(data)=>{
            console.log(data);
        })

    },[])

    return (
        <div>
            <h2> Socket io Practise Session </h2>
        </div>
    );
}

export default Practise;