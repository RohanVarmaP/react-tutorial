import React from 'react'


const Form = () => {


    function IngredientsList() {
        return ingredients.map(value => <li key={value}>{value}</li>)
    }

    return (
        <>
            <form action={addIngredient} /*onSubmit={handleSubmit}*/ className='add-ingredient'>
                <input type="text" placeholder='e.g. oregano' aria-label='Add ingredient' name='ingredient' />
                <button>+ Add ingredient</button>
            </form>
            {ingredients.length ?
                <div className='ingredent-list'>
                    <h2>Ingredients on hand:</h2>
                    <ul>
                        <IngredientsList />
                    </ul>
                </div>
                : null}
            {ingredients.length > 4 ? <ReadyForRecipe /> : null}
            {recipiShown ? <Recipe /> : null}
        </>
    )
}

export default Form
