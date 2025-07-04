
export default function ReadyForRecipe(props) {

    return (
        <section className='ready-for-recipe'>
            <div className='get-recipe-div'>
                <h2>Ready for a recipe</h2>
                <p>generate a recipe from your list of ingredients</p>
            </div>
            <div>
                <button onClick={props.getRecipe} className='get-recipe'>Get a recipe</button>
            </div>
        </section>)
}