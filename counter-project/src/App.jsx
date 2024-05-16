import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, ShroodCounter] =  useState(0)
const addValue = () =>{
  if(counter < 20){
    console.log(counter)
    counter = counter+1
    ShroodCounter(counter)
  }
}

const removeValue = () =>{
  if (counter > 0) {
    counter = counter -1
    ShroodCounter(counter)
    console.log(counter,"remove counter")
  }
}

  return (
    <>
    <h1>Counter Using React</h1>
    <h2>{counter}</h2>
    <button
      onClick={addValue}>Increaes Value</button>
    <br />
    <br />
    <button
    onClick={removeValue}
    >Decrease Value</button>
    </>
  )
}

export default App
