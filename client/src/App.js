import { Routes, Route } from 'react-router-dom'
import CheckIn from './checkIn/CheckIn'
import Results from './instructor/Results'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<CheckIn />} />
      <Route path="/instructor" element={<Results />} />
    </Routes>
  )
}

export default App

// NOTES: Selects in React => (useId) https://react.dev/reference/react-dom/components/select, useRef is what used to be recommended