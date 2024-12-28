// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'

function App() {
const [jokes, setJokes] = useState([]);

  return (
    <>
      <h1>Hey There!</h1>
      <p>number of Jokes : {jokes.length}</p>
      {
        jokes.map((joke,index)=>{

          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>

      })}
    </>
  )
}

export default App
