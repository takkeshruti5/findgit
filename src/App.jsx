import { useState } from 'react'
import './App.css'
import GitHubFinder from './Components/GitHubFinder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     < GitHubFinder />
    </>
  )
}

export default App
