import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import MainPage from './MainPage'
import PageFooter from './PageFooter'

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <PageFooter />
    </>
  )
}

export default App
