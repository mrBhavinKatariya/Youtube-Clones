import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className = 'bg-green-300 text-black p-4 rounded-xl'>Tailwin Test</h1>
      </div>     
    </>
  )
}

export default App