import {BrowserRouter as Router} from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Content from './layout/Content';
import {CatalogContextProvider} from './catalog/Context';

export default function App() {
    return (
        <Router>
            <Header />
            <CatalogContextProvider>
                <Content />
            </CatalogContextProvider>
            <Footer />
        </Router>
    );
}
