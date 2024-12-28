// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
const [jokes, setJokes] = useState([]);
useEffect(()=>{
  axios.get('/api/jokes')
 .then(res=> setJokes(res.data))
 .catch(err=>console.error(err))
})

  return (
    <>
      <h1>Hey There!</h1>
      <p>number of Jokes : {jokes.length}</p>
      {
        jokes.map((joke)=>
          (
            <div key={joke.id} >
            <h3>{joke.title}</h3>
            <p>{joke.content}</p> 
          </div>
          )

      )}
    </>
  )
}

export default App
