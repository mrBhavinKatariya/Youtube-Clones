import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


function App() {
  const [jokes,   setJokes] = useState([])

  useEffect(() => {
    axios.get("/api/jokes")
    .then((res) => {
      setJokes(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      console.log("Jokes fetched successfully")
    })
  },[])
  return (
    <>
      <h1>FrontEnd Devloper</h1>
      <p>JOCKES:{jokes.length}</p>


      {
        jokes.map((joke, index) => 
        (
            <div key={joke.id}>
              <h2>{joke.id}</h2>
              <h3>{joke.joke}</h3>
              <p>{joke.answer}</p>
            </div>
         ) )

      }
    </>
  )
}

export default App
