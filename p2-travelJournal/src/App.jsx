import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from './Entry'
import entryData from './entryData'

function App() {
  const new_output = entryData.map((data) => {
    return <Entry
      key={data.id}
      {...data}
    />
  })
  return (
    <>
      <Header />
      <main>
        {new_output}
      </main>
    </>
  )
}

export default App
