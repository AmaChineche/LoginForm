import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorBoundary from './Components/ErrorBoundary'
import Display from './Components/display'
import LoginRegister from './Components/LoginRegister'

function App() {
  return (
    <>
      <ErrorBoundary>
      <LoginRegister />
    </ErrorBoundary>
    </>
  )
}

export default App
