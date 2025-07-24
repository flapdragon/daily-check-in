import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const handleCountClick = () => {
    console.log("handleCountClick")
    const randomCurrent = Math.floor(Math.random() * (100 - 0) + 0)
    console.log("randomCurrent", randomCurrent)
    if (count === randomCurrent) {
      const randomNew = Math.floor(Math.random() * (500 - 0) + 0)
      console.log("randomNew", randomNew)
      setCount(randomNew)
    }
    else if (count === 500) {
      setCount(-1)
    }
    else {
      setCount((count) => count + 1)
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleCountClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
