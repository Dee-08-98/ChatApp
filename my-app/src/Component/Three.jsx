import React, { useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client'
function Three(props) {
    const [message, setMessage] = useState('')
    const [show , setShow] = useState()
    const socket = useMemo(() => io('http://localhost:3222/'), [])

    useEffect(() => {
        socket.on('connect', () => {
            console.log('socket connected', socket.id);
        })
        // *******************************

        socket.on('send-msg-all',(data)=>{
            console.log(data);
           setShow(data)
        })

    }, [])


    const submitForm = (e) => {
        e.preventDefault()
        socket.emit('msg',message)
        setMessage('')
    }


    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" placeholder='Enter name' value={message} onChange={e => setMessage(e.target.value)} />
                <button type='submit'> Submit </button>
            </form>
            <br />
            <h4>{show}</h4>
        </div>
    );
}

export default Three;