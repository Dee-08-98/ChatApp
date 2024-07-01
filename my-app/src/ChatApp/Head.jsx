import React from 'react';
import './Head.css'
import {  useNavigate } from 'react-router-dom';

function Head({ head }) {
    const navigate = useNavigate()
  
    return (
        <div >
            <div className="head">
                <h6 className='header'>{head} </h6>
               <a href="/"> <h6  className='close'> x </h6></a>
            </div>
        </div>
    );
}

export default Head;