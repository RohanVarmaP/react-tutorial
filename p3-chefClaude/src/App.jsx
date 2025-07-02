import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import IngredientList from './components/IngredientList'

function App() {

  return (
    <>
      <Header />
      <main>
        <Form />
        {/* <IngredientList /> */}
      </main>
    </>
  )
}

export default App
