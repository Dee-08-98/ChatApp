import React, { useEffect, useMemo } from 'react';
import { io } from 'socket.io-client'

function Two(props) {
    const socket = useMemo(() => io('http://localhost:3222/'), [])



    useEffect(() => {
        socket.on('connect', () => {
            console.log('socket connected');
           
        })
        socket.emit('welcome', 'Hi you are most welcome')
        socket.on('all',(data)=>{
            console.log(data);
        })
        socket.on('group',(datas)=>{
            console.log(datas);
        })

        return ()=>{
            socket.disconnect()
        };
    }, [])

    return (
        <div>
            <h2>Hlo , Deepak kumar jha</h2>
        </div>
    );
}

export default Two;