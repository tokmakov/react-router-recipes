import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {getFoundRecipes} from '../api';
import Preloader from '../components/Preloader';
import RecipeList from './RecipeList';

export default function SearchResult(props) {
    const location = useLocation();

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // проверяем корректность данных
        const search = decodeURIComponent(location.search);
        if (search === '') {
            setLoading(false);
            return;
        }
        const [name, value] = search.split('=');
        if (name.trim() !== '?str') {
            setLoading(false);
            return;
        }
        if (value.trim() === '') {
            setLoading(false);
            return;
        }
        // выполняем запрос к сервису
        getFoundRecipes(value).then(data => {
            if (data.meals) {
                setRecipes(data.meals);
            }
            setLoading(false);
        });
    }, [location.search]);

    return (
        <>
            {loading ? (
                <Preloader />
            ) : recipes.length ? (
                <>
                    <h1>Search results</h1>
                    <RecipeList items={recipes} />
                </>
            ) : (
                <p>Ничего не найдено</p>
            )}
        </>
    );
}
