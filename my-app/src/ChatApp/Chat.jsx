import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Holder } from './ContextData';
import { io } from 'socket.io-client'
import './Chat.css'
import Message from './Message';
import ReactScrollToBottom from 'react-scroll-to-bottom'
import Head from './Head';
function Chat(props) {
    const { data, setdata } = useContext(Holder)
    const [message, setValu] = useState('')
    const [ID, setID] = useState()
    const [messages, setMessages] = useState([])

    const socket = useMemo(() => io('http://localhost:5566/'), [])

    const sendData = (e) => {
        e.preventDefault()
        socket.emit('message', { message, ID })
        setValu('')
    }
    console.log(message);
    useEffect(() => {
        socket.on('connect', () => {
            console.log(socket.id, 'Socket connected');
            setID(socket.id)
        })
        socket.emit('joined', { data: data })

        socket.on('welcome', (data) => {
            setMessages([...messages, data])
            console.log(data.admin, data.message);
        })


        socket.on('userJoined', (data) => {
            setMessages([...messages, data])
            console.log(data.admin, data.message);
        })



        socket.on('left', (data) => {
            setMessages([...messages, data])
            console.log(data.admin, data.message);
        })

        return () => {
            socket.emit('disconnect')
            socket.off()
        }

    }, [])

    useMemo(() => {
        socket.on('send', (data) => {
            setMessages([...messages, data])
            console.log(data.admin, data.message, data.ID);
        })
        return () => {
            socket.off() 
        }
    }, [messages])

    return (
        <div>
            <div className="container-fluid" id='chat'>
                <div className="row">
                   
                    <div className="header">
                    <Head head={data}></Head>
                    </div>
                    <ReactScrollToBottom className="chatBox">
                        {
                            messages.map((item) => {
                                return <Message user={item.id === ID ? '' : item.admin} Sendmessage={item.message} classs={item.ID === ID ? 'right ' : "left"} ></Message>
                            })
                        }


                    </ReactScrollToBottom>
                    <div className="inputBox">
                        <input value={message} onChange={e => setValu(e.target.value)} placeholder='Enter Message' type="text" id='chatInput' />
                        <button onClick={sendData} className='sendBtn'> Send </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Chat; 