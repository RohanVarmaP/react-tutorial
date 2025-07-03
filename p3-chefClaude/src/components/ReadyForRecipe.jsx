import React from "react"

export default function ReadyForRecipe() {
    return (
        <section className='ready-for-recipe'>
            <div className='get-recipe-div'>
                <h2>Ready for a recipe</h2>
                <p>generate a recipe from your list of ingredients</p>
            </div>
            <div>
                <button onClick={GetRecipe} className='get-recipe'>Get a recipe</button>
            </div>
        </section>)
}