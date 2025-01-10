import React from 'react'
import logo from './logo.svg'
import './App.css'
import { randomNotification } from './utils/alert'

function App() {
  const enableNotification = () => {
    Notification.requestPermission().then((result) => {
      if (result === 'granted') {
        console.log('Notification enabled')
        randomNotification()
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={enableNotification}>Enable</button>
      </header>
    </div>
  )
}

export default App
