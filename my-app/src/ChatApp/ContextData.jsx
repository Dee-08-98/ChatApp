import React, {createContext, useState } from 'react';

export const Holder = createContext("")
function ContextData({children}) {
    const [data , setdata] = useState("")
    return (
        <>
            <Holder.Provider value={{data,setdata}}>
               {children}
            </Holder.Provider>
        </>
    );
}


export default ContextData;