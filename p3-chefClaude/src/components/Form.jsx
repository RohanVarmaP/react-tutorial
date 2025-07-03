import React from 'react'


const Form = () => {


    function IngredientsList() {
        return ingredients.map(value => <li key={value}>{value}</li>)
    }

    function ReadyForRecipe() {

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

    function Recipe() {
        return (
            <section id="spicy-herb-chicken">
                <h2>Spicy Herb Chicken with Tomato Glaze</h2>

                <h3>Ingredients:</h3>
                <ul>
                    <li>2 Chicken breasts (boneless, skinless)</li>
                    <li>1 tsp Chilli flakes</li>
                    <li>1/2 tsp Crushed black pepper</li>
                    <li>1 tsp Dried oregano</li>
                    <li>2 Tomatoes (blended or finely chopped)</li>
                    <li>1 tbsp Olive oil</li>
                    <li>Salt to taste</li>
                    <li>Fresh coriander (for garnish)</li>
                </ul>

                <h3>Preparation Steps:</h3>
                <ol>
                    <li>Marinate the chicken with chilli flakes, pepper, oregano, salt, and 1/2 tbsp olive oil. Let it sit for 30 minutes.</li>
                    <li>Heat remaining olive oil in a pan. Sear chicken on medium-high heat until browned on both sides (about 5–6 mins per side).</li>
                    <li>Add the blended tomato to the pan. Cook for another 8–10 minutes until the chicken is cooked through and the sauce thickens.</li>
                    <li>Adjust seasoning if needed. Turn off heat and let it rest for 5 minutes.</li>
                </ol>

                <h3>Dish Design & Serving:</h3>
                <p>
                    Serve the Spicy Herb Chicken over a bed of herbed rice or warm flatbread. Drizzle leftover tomato glaze on top, and garnish with freshly chopped coriander and a sprinkle of crushed pepper. Place a grilled tomato slice on the side for a vibrant visual touch.
                </p>
            </section>

        )
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
