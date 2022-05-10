import { Link } from 'react-router-dom';

function MealItem(props){

    const {
    strMeal,
    strMealThumb,
    idMeal
    } = props

    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
            </div>
            <div className="card-action">
                <Link className="btn" to={`/meal/${idMeal}`}>
                    Watch recipe
                </Link>
            </div>
        </div>
    );

}

export {MealItem}