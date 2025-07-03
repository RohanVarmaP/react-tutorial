import React from 'react'
const ingredients = ['chilli', 'pepper', 'oregano', 'chicken', 'tamato']

function RenderIngredients(ingredients) {
    return ingredients.map(value => <li key={value}>{value}</li>)
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
