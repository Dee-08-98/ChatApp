import React, { useContext } from 'react';
import './Message.css'
import { Holder } from './ContextData';
function Message({Sendmessage,user,classs}) {
    
    if(user){
        return (
            <div className={`MessageBox ${classs}`}>
               {`${user} : ${Sendmessage}`}
            </div>
        ); 
    }
    else{
        return (
            <div className={`MessageBox ${classs}`}>
            {`You : ${Sendmessage}`}
               
            </div>
        );
    }
    
}

export default Message;