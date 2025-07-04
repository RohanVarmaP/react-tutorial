import React, { useEffect } from 'react'
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

  const recipeSection = React.useRef(null)

  function addIngredient(ingredientData) {
    setIngredients(prevList => [...prevList, ingredientData])

  }

  async function getRecipe() {
    const newrecipe = await getRecipeFromMistral(ingredients)
    setRecipe(newrecipe)
  }

  React.useEffect(() => {
    if (recipe !== '' && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [recipe])

  return (
    <>
      <Header />
      <main>
        <Form addIngredient={addIngredient} />
        {ingredients.length ? <IngredientList ingredients={ingredients} /> : null}
        {ingredients.length > 4 ? <ReadyForRecipe getRecipe={getRecipe} refs={recipeSection} /> : null}
        {recipe ? <Recipe recipe={recipe} /> : null}
      </main>
    </>
  )
}

export default App
