import React from 'react'


const Form = () => {
    return (
        <>
            <form action={addIngredient} /*onSubmit={handleSubmit}*/ className='add-ingredient'>
                <input type="text" placeholder='e.g. oregano' aria-label='Add ingredient' name='ingredient' />
                <button>+ Add ingredient</button>
            </form>
            {ingredients.length ? <IngredientsList /> : null}
            {ingredients.length > 4 ? <ReadyForRecipe /> : null}
            {recipiShown ? <Recipe /> : null}
        </>
    )
}

export default Form
