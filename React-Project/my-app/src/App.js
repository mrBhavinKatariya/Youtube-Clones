
import LifeCycleClass from './ClassComponent/LifeCycleClass';
import Welcome from './ClassComponent/Welcome';
import HandleForm from './FunctionalComponent/HandleForm';
import Parent from './FunctionalComponent/Parent';
import WelcomeFunction from './FunctionalComponent/WelcomeFunction';
import { useState } from 'react';


function App() {
  const[name,setName]=useState('Testing');
  function updateName(){
    debugger
    setName('Newvalue')
  }
  return (
      <>
        <LifeCycleClass></LifeCycleClass>
        {/* <Parent></Parent> */}
        {/* <HandleForm  name={name}></HandleForm> */}
        {/* Name : <input type="text" onChange={(e)=>setName(e.target.value)}/><br></br> */}
        {/* <Welcome name={'Testing'} city={'Surat'} address={{area:'Varchha',city:'surat',pincode:7657657}}></Welcome> */}
        {/* <WelcomeFunction name={name} city={'Surat'} address={{area:'Varchha',city:'surat',pincode:7657657}}></WelcomeFunction>
        <button onClick={()=>updateName()}>Click</button> */}
      </>
   
  );
}

export default App;
