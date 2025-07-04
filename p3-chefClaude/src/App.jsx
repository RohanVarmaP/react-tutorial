import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import IngredientList from './components/IngredientList'
import ReadyForRecipe from './components/ReadyForRecipe'
import Recipe from './components/Recipe'
import { getRecipeFromMistral } from './ai'

function App() {
  const [ingredients, setIngredients] = React.useState([])

  const [recipe, setRecipe] = React.useState()

  function addIngredient(ingredientData) {
    console.log("in app")
    console.log(ingredientData)
    setIngredients(prevList => [...prevList, ingredientData])

  }

  async function getRecipe() {
    const newrecipe = await getRecipeFromMistral(ingredients)
    console.log(newrecipe)
    setRecipe(newrecipe)
  }


  return (
    <>
      <Header />
      <main>
        <Form addIngredient={addIngredient} />
        {ingredients.length ? <IngredientList ingredients={ingredients} /> : null}
        {ingredients.length > 4 ? <ReadyForRecipe getRecipe={getRecipe} /> : null}
        {recipe ? <Recipe recipe={recipe} /> : null}
      </main>
    </>
  )
}

export default App
