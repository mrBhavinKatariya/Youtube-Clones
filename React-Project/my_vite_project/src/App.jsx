import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  if(count <= -1){
      setCount(0)
  }

  if(count >= 21)
  { 
    setCount(20)
  }
  return (
    <>
      <div>

      </div>
      <div className="card">
        <h2> Count is : {count}</h2>
        <button onClick={()=>setCount((count) => count +1)}>Add</button>
       <button onClick={()=> setCount((count) => count -1)}>Minus</button>

        <button onClick={() => setCount((count) =>count +2 )}>Add +2</button>
      </div>
     
    </>
  )
}

export default App
