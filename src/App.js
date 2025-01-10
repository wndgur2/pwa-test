import React from 'react'
function App() {
  const requestNotificationPermission = () => {
    Notification.requestPermission()
      .then((result) => {
        if (result === 'granted') {
          console.log('Notification permission granted.')
        } else {
          console.warn('Notification permission denied.')
        }
      })
      .catch((error) => console.error('Error requesting notification permission:', error))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Push Notifications</h1>
        <button onClick={requestNotificationPermission}>Enable Notifications</button>
      </header>
    </div>
  )
}

export default App
