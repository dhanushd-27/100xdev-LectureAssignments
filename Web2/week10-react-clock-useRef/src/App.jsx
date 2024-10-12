import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const timer = useRef(null);

  function startClock(){
    let value = setInterval(() => {
      setCount(counter => counter + 1)
    }, 1000);

    timer.current = value;
  }

  function stopClock(){
    clearInterval(timer.current);
    timer.current = null;
  }

  return (
    <>
      <h1>{count}</h1>

      <button onClick={startClock}>Start</button>

      <button onClick={stopClock}>Stop</button>
    </>
  )
}

export default App
