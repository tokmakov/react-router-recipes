import {Link} from 'react-router-dom';

export default function RecipeCard(props) {
    const {
        idMeal,
        strMeal,
        strMealThumb
    } = props;
    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={strMealThumb} alt="" />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {strMeal}
                </span>
            </div>
            <div className="card-action">
                <Link to={`/recipe/${idMeal}`} className="btn-small">
                    View recipe
                </Link>
            </div>
        </div>
    );
}