import React, { useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client'
function Practise2(props) {
    const socket = useMemo(() => io('http://localhost:8552/'), [])
    const [message , setMessage] = useState('')

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Frontend Socket Connected on id ', socket.id);
        })

        socket.on('welcome', (data) => {
            console.log(data);
        })

        socket.on('welcomeAll', (data) => {
            console.log(data);
        })

        socket.on('msgAll',(data)=>{
            console.log(data);
        })

        return () => {
            socket.disconnect()
        }

    }, [])

    const submitForm = (e)=>{
        e.preventDefault()

        socket.emit('messag',message)

    }

    return (
        <div>
            <h2> Socket io seession</h2>

<form action="" onSubmit={submitForm}>
    <input value={message} onChange={e=>setMessage(e.target.value)} type="text" placeholder='Message' />
    <button type='submit' className='btn btn-success'> Send </button>
</form>

        </div>
    );
}

export default Practise2;