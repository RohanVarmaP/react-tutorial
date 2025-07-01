import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MainPage() {
  return (
    <main>
      <h1>Fun facts about react</h1>
      <ol>
        <li>React is the most popular library.</li>
        <li>It helps in creases chances for getting jobs</li>
        <li>React is created and released on 2013</li>
        <li>Created by johe</li>
        <li>mainted by meta</li>
      </ol>
    </main>
  )
}

function HeaderPage() {
  return (
    <header>
      <img src={reactLogo} />
    </header>
  )
}

function App() {
  return (
    <>
      <HeaderPage />
      <MainPage />
    </>
  )
}

export default App
