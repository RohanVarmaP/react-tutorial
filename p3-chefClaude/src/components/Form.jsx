import React from 'react'


const ingredients = ['chilli', 'pepper', 'oregano', 'chicken', 'tamato']

const ingredientsListItems = ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get('ingredient')
    console.log(newIngredient);
    ingredients.push(newIngredient)
    console.log(ingredients)
}


const Form = () => {
    return (
        <>
            <form onSubmit={handleSubmit} className='add-ingredient'>
                <input type="text" placeholder='e.g. oregano' aria-label='Add ingredient' name='ingredient' />
                <button>+ Add ingredient</button>
            </form>
            <div className='ingredent-list'>
                <h2>Ingredients on hand:</h2>
                <ul>
                    {ingredientsListItems}
                </ul>
            </div>
        </>
    )
}

export default Form
