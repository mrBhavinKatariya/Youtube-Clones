import React from 'react';

function Child({PluseElement,MinusElement,Message}){

    
    return(
        <React.Fragment>

            <h3>Chile Components.</h3>
        <button onClick={()=>PluseElement()}>Count++</button>
        <button onClick={()=> MinusElement()}>Count--</button>

       Name: <input type='text' onChange={(e)=>Message(e)}></input>
        </React.Fragment>
    )
}
export default Child;