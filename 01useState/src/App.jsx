import React from 'react'
import './App.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const increaseCount = ()=> {
    setCount(prev=>prev + 1) // 1
    setCount(prev=>prev + 1) // 2
    setCount(prev=>prev + 1) // 3
    setCount(prev=>prev + 1) // 4
  }

  return (
    <>
     <h1>Count: {count}</h1>
     <button onClick={increaseCount}>Increase</button>
    </>
  )
}

export default App