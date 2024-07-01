  import React, { useContext, useEffect, useMemo, useState  } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../ChatApp/OurApp.css'
import { Holder } from './ContextData';
function OurApp(props) {
 

    const navigate = useNavigate()
    const [val , setVal] = useState('')
    const {data , setdata} = useContext(Holder)
    const clickButton = (e)=>{
        if(val.length>0){
            e.preventDefault()
            setdata(val)
            setVal('')
            navigate('/chat')
        }
       
    }
    return (
        <>
          <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4">
                    <h2>Chat_App</h2>
                  <input type="text" value={val}onChange={(e)=>setVal(e.target.value)} placeholder='Enter Name' />
                <button  id='btsuc' onClick={clickButton}> Join Chat </button>
                </div>
            </div>
          </div>
        </>
    );
}

export default OurApp;