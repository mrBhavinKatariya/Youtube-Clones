import React, { useState } from 'react';
import Child from './Child';

function Parent(){
    const[count,setCount]=useState(0);
    const[message,setMessage]=useState('Welcome')


    function handleClick(e,n){
        debugger
        setCount(count + n);

    }

    function handleMessage(e){
        debugger
        setMessage(e.target.value)  
    }
    return(
        <React.Fragment>
             <h3>Parent Component : </h3>
             <p>sdjhfkjdsh</p>
       
    
        
       
        {/* //     <h3>Parent Component : </h3>
        //     <p>Counter : {count}</p>
        //     <p>Message : {message}</p> */}
            <Child handleClick={(e)=>handleClick(e,1)} handleMessage={(e)=>handleMessage(e)}></Child>
        

        </React.Fragment>

    )
}

export default Parent;