import React from 'react'


const Form = (props) => {
    function addingIngredient(ingredient) {
        const ingredientData = ingredient.get('ingredient')
        console.log("in form")
        console.log(ingredientData)
        ingredientData ? props.addIngredient(ingredientData) : console.log('Enter a value to add ingredient.')
    }
    return (
        <form action={addingIngredient} /*onSubmit={handleSubmit}*/ className='add-ingredient'>
            <input type="text" placeholder='e.g. oregano' aria-label='Add ingredient' name='ingredient' />
            <button>+ Add ingredient</button>
        </form>
    )
}

export default Form
