import CategoryCard from './CategoryCard.js';

export default function CategoryList(props) {
    return (
        <div className="items">
            {props.items.map(item => <CategoryCard key={item.idCategory} {...item} />)}
        </div>
    );
}