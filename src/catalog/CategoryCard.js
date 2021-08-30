import {Link} from 'react-router-dom';

export default function CategoryCard(props) {
    const {
        strCategory,
        strCategoryThumb,
        strCategoryDescription
    } = props;
    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={strCategoryThumb} alt="" />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {strCategory}
                </span>
                <p>{strCategoryDescription.slice(0, 90)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`} className="btn-small">
                    View recipes
                </Link>
            </div>
        </div>
    );
}