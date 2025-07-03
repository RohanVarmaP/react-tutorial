import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import IngredientList from './components/IngredientList'

function App() {
  const [ingredients, setIngredients] = React.useState(['chilli', 'pepper', 'oregano', 'chicken', 'tamato'])

  const [recipiShown, setRecipeShown] = React.useState(false)

  function addIngredient(FormData) {
    const ingredientData = FormData.get('ingredient')
    ingredientData ? setIngredients(prevList => [...prevList, ingredientData]) : console.log('Enter a value to add ingredient.')

  }

  function getRecipe() {
    setRecipeShown(prevvalue => !prevvalue)
  }


  return (
    <>
      <Header />
      <main>
        <Form />
        {ingredients.length ? <IngredientsList /> : null}
        {ingredients.length > 4 ? <ReadyForRecipe /> : null}
        {recipiShown ? <Recipe /> : null}
      </main>
    </>
  )
}

export default App
