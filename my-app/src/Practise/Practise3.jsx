import React, { useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client'
function Practise3(props) {
    const socket = useMemo(() => io('http://localhost:8552/'), [])
    const [message , setMessage] = useState('')
    const [room , setRoom] = useState('')
    const [ID , SetID] = useState()
    const [showMessage , setshowMessage] = useState([])

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Frontend Socket Connected on id ', socket.id);
            SetID(socket.id)
        })

        socket.on('welcome', (data) => {
            console.log(data);
        })

        socket.on('welcomeAll', (data) => {
            console.log(data);
        })

        socket.on('msgAll',(data)=>{
            console.log(data);
            setshowMessage((showMessage)=>[...showMessage,data])
        })

       

    }, [])

    const submitForm = (e)=>{
        e.preventDefault()

        socket.emit('messag',{message ,room})
        setMessage('')
    }

    return (
        <div>
            <h2> Socket io seession Practise 3</h2>

<h3> ID : {ID}</h3>

<form action="" onSubmit={submitForm}>
<input value={room} onChange={e=>setRoom(e.target.value)} type="text" placeholder='Room' />
    <input value={message} onChange={e=>setMessage(e.target.value)} type="text" placeholder='Message' />
    <button type='submit' className='btn btn-success'> Send </button>
</form>

{
    showMessage && showMessage.map((list)=>{
        return <h4>{list}</h4>
    })
}

        </div>
    );
}

export default Practise3;