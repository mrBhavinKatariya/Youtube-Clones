import React from 'react';

function Child({handleClick,handleMessage}){

    return(
        <>
            <h3>Child Component : </h3>
            Enter message : <input type="text" onChange={(e)=>handleMessage(e)}/><br></br><br></br>
            <button onClick={()=>handleClick()}>Counter++</button>
        </>
    )
}

export default Child;