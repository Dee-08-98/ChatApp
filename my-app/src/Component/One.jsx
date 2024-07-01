import React, { useEffect, useMemo, useState } from 'react';
import { connect, io } from 'socket.io-client'
function One(props) {


    const socket = useMemo(() => io("http://localhost:2525/"), [])

    const [message, setmessage] = useState('')
    const [val, setval] = useState([])
    useEffect(() => {
        socket.on("connect", () => {
            console.log(socket.id);
        })

        socket.on('broad', (data) => {
            setval(data)
            console.log(data);
        })

    }, [])

    const sendHandler = (e) => {
        e.preventDefault()
        socket.emit('welcome', [message])
        setmessage('')
    }

    return (
        <div>
            <h2>Chat App</h2>
            <br />
            <br />

            <input type="text" placeholder='Enter text' value={message} onChange={(e) => setmessage(e.target.value)} />
            <button onClick={sendHandler}> Send </button>
            <br />
            <br />

          <h2>{val}</h2>

        </div>


    );
}

export default One;