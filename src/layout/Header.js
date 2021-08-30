import {Link} from 'react-router-dom';

export default function Header(props) {
    return (
        <header>
            <nav className="teal lighten-1">
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">Meal</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}