import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>flip-o-zon</h1>
      <Header/>
      <h1>first we will make backend then we will come here</h1>
    </>
  )
}

export default App
