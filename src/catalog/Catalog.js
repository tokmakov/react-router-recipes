import {useContext} from 'react';
import Preloader from '../components/Preloader';
import CategoryList from './CategoryList';
import {CatalogContext} from './Context';

export default function Catalog() {
    const {categories, loading} = useContext(CatalogContext);

    return (
        <>
            <h1>Categories</h1>
            {loading ? (
                <Preloader />
            ) : categories.length ? (
                <CategoryList items={categories} />
            ) : (
                <p>Не удалось загрузить список</p>
            )}
        </>
    );
}
