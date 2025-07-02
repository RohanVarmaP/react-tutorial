import React from 'react'
const ingredients = ['chilli', 'pepper', 'oregano', 'chicken', 'tamato']

function RenderIngredients(ingredients) {
    ingredients = ingredients.ingredients;
    console.log(ingredients);
    const ingList = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    });
    console.log(ingList);
    return ingList
}

const IngredientList = () => {
    return (
        <div className='ingredent-list'>
            <h2>Ingredients on hand:</h2>
            <ul>
                <RenderIngredients ingredients={ingredients} />
            </ul>
        </div>
    )
}

export default IngredientList
