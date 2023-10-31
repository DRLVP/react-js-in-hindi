import { useState, useEffect } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 10;

  const addValue = () => {
    setCounter(counter + 1);
    if (counter === 20) {
      setCounter(0);
    }
  }
  const removeValue = () => {
    setCounter(counter - 1);
    if (counter === 0) {
      setCounter(0);
    }
  }

  return (
    <>
      <h1>Chai Aur React || DRLOV</h1>
      <h2>counter: {counter}</h2>
      <h2>counter1: {counter}</h2>
      <h2>counter2: {counter}</h2>
      <h2>counter3: {counter}</h2>
      <h2>counter4: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
