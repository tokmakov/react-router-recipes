import {Route, Switch} from 'react-router-dom';
import Catalog from '../catalog/Catalog';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../components/NotFound';
import CategoryItem from '../catalog/CategoryItem';
import RecipeItem from '../catalog/RecipeItem';
import SearchInput from '../catalog/SearchInput';
import {useHistory} from 'react-router-dom';
import SearchResult from '../catalog/SearchResult';

export default function Content() {
    const history = useHistory();

    // если пользователь ввел поисковый запрос и нажал Enter,
    // то переходим на страницу server.com/search?str=Beaf и
    // добавляем ее в историю посещенных страниц браузера
    const handleSearch = (str) => {
        if (str.trim() === "") return;
        history.push({
            pathname: '/search',
            search: `?str=${str.trim()}`,
        });
    };

    return (
        <main className="container">
            <SearchInput searchHandler={handleSearch} />
            <Switch>
                <Route exact path="/" component={Catalog} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/category/:name" component={CategoryItem} />
                <Route exact path="/recipe/:id(\d+)" component={RecipeItem} />
                <Route exact path="/search" component={SearchResult} />
                <Route component={NotFound} />
            </Switch>
        </main>
    );
}