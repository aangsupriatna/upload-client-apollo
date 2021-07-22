import React from 'react'
import logo from './logo.svg'
import './App.css'
import { UploadFile, UploadFiles } from './Upload'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <p>Upload single file: <UploadFile /></p>
      </div>
      <div>
        <p>Upload multiple files: <UploadFiles /></p>
      </div>
    </div>
  )
}

export default App
