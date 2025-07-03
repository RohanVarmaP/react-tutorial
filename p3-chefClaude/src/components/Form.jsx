import React from 'react'


const Form = () => {
    const [ingredients, setIngredients] = React.useState(['chilli', 'pepper', 'oregano', 'chicken', 'tamato'])

    // function handleSubmit(event) {
    //     console.log(event)
    //     event.preventDefault()
    //     const formData = new FormData(event.currentTarget)
    //     const ingredientData = formData.get('ingredient')
    //     ingredientData ? setIngredients(prevList => [...prevList, ingredientData]) : console.log('Enter a value to add ingredient.')
    //     console.log(ingredients)
    // }
    function addIngredient(FormData) {
        const ingredientData = FormData.get('ingredient')
        ingredientData ? setIngredients(prevList => [...prevList, ingredientData]) : console.log('Enter a value to add ingredient.')

    }

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
                : console.log('Nothing in ingredients List.')}
        </>
    )
}

export default Form
