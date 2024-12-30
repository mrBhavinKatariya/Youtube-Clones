import React, { useState } from 'react';
import Child from './Child';


function Parents(){
    const [count,setCount]=useState(0);
    const [messages,setMessages]=useState('');


    function PluseElement(e,n){
        setCount(count + n)
    }

    function MinusElement(e,n){
        setCount(count - n)
    }


    function Message(e){
        setMessages(e.target.value)
    }
    return(
        <React.Fragment>
            <h3>Parent Components.</h3>
            <p>Counter: {count}</p>
            <p>Name:{messages}</p>
            <Child PluseElement={(e)=>PluseElement(e,1)}  MinusElement={(e)=>MinusElement(e,1)}  Message={(e)=>Message(e)}></Child>
        </React.Fragment>

        
    )
}

export default Parents;