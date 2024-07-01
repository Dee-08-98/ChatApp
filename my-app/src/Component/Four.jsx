import React, { useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client'
function Four(props) {
    const [message, setMessage] = useState('')
    const [room , setRoom] = useState('')
    const [ID , setID] = useState('')
    // const [messages,setMessages] = useState([])
    const socket = useMemo(() => io('http://localhost:3222/'), [])

    useEffect(() => {
        socket.on('connect', () => {
            console.log('socket connected', socket.id);
            setID(socket.id)
        })
        // *******************************
        socket.on('send-msg-all',(data)=>{
            
            // setMessagess((messages)=>[...messages,data])
            console.log(data);
        })

    }, [])


    const submitForm = (e) => {
        e.preventDefault()
        socket.emit('msg',{message , room})
        setMessage('')
    }




    return (
        <div>
            <h4>{ID}</h4>
            <form onSubmit={submitForm}>
                <input type="text" placeholder='Enter name' value={message} onChange={e => setMessage(e.target.value)} />
                <input type="text" placeholder='Enter ID' value={room} onChange={e => setRoom(e.target.value)} />
                <button type='submit'> Submit </button>
            </form>
            <br />
            
        </div>
    );
}

export default Four;