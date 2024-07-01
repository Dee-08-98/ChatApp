import React, { useState } from 'react';

function Component(props) {
    const [show, setShow] = useState('password')
    const [pass, setPasss] = useState(false)
    const showPassword = () => {
        if (show === 'password') {
            setShow('text')
        }
        else {
            setShow('password')
        }
    }

    const setPass = () => {
        setPasss(!pass)
    }
    console.log('rendering');
    return (
        <div>
            <h2> hlo guys i m deepak </h2>
            <input type={`${show}`} placeholder='Enter password' /> <br />
            <input type="checkbox" onClick={showPassword} /> {show==='password' ? 'Show' : 'Hide'}
            <hr />
            <input type={pass ? 'text' : 'password'} placeholder='Enter password' />
            <button onClick={setPass} > {pass ? 'Hide' : 'Show'} </button>


        </div>
    );
}

export default Component;