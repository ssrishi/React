import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
      
    const addValue = () => {

    if (counter<20){
      counter = counter + 1
      setCounter(counter)
      console.log(counter);
    }  
  }
  const removeValue = () => {
    if (counter > 0){
      counter = counter - 1
      setCounter(counter)
      console.log(counter);
    }
    
  
  }
  return (
    <>
      <h1>Counter Value {counter}</h1>

      <button onClick={addValue}>Add Value {counter}</button><br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
