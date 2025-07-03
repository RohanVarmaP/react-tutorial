
const ingredients = ['chilli', 'pepper', 'oregano', 'chicken', 'tamato']

function RenderIngredients(props) {
    const ingredients = props.ingredients
    return ingredients.map(value => <li key={value}>{value}</li>)
}

const IngredientList = (props) => {
    return (
        <div className='ingredent-list'>
            <h2>Ingredients on hand:</h2>
            <ul>
                <RenderIngredients ingredients={props.ingredients} />
            </ul>
        </div>
    )
}

export default IngredientList
