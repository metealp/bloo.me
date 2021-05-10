import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Camera from './features/camera/Camera'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Camera />
      </header>
    </div>
  )
}

export default App
