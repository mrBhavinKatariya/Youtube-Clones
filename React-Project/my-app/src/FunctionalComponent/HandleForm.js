import React, { useState } from 'react';

function HandleForm(props){
    debugger
    const[name,setName]=useState('');
    const[address,setAddress]=useState('')
    const[city,setCity]=useState('')
    const[tnc,setTnc]=useState(false)


    function submitData(e){
        debugger

        if(name==''){
            alert('Name field required.')
            e.preventDefault();
        }
    }
    return(
        <>
            <h2>Handle Form</h2>

            <form onSubmit={(e)=>submitData(e)}>
                Name : <input type="text" onChange={(e)=>setName(e.target.value)}/><br></br><br></br>
                Address : <input type="text" onChange={(e)=>setAddress(e.target.value)}/><br></br><br></br>
                City : <select onChange={(e)=>setCity(e.target.value)}>
                    <option value={''}>Selct City</option>
                    <option value={'Surat'}>Surat</option>
                    <option value={'Amreli'}>Amreli</option>
                    <option value={'Rajkot'}>Rajkot</option>
                </select><br></br><br></br>
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/> Terms and Conditions<br></br><br></br>
                <button type='submit'>Save</button>
            </form>

            Name : {name}<br></br>
            Address : {address}<br></br>
            City : {city}<br></br>
            Tnc :  {tnc ? 'Yes' : 'No'}<br></br>
        </>
    )
}
export default HandleForm;