import React from 'react'


const Form = (addIngredient) => {
    function addingIngredient(ingredient) {
        const ingredientData = FormData.get('ingredient')
        ingredientData ? addIngredient(ingredient) : console.log('Enter a value to add ingredient.')
    }
    return (
        <form action={addingIngredient} /*onSubmit={handleSubmit}*/ className='add-ingredient'>
            <input type="text" placeholder='e.g. oregano' aria-label='Add ingredient' name='ingredient' />
            <button>+ Add ingredient</button>
        </form>
    )
}

export default Form
