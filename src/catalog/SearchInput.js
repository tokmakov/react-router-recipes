import {useState} from 'react';
import {useLocation} from 'react-router';

export default function SearchInput(props) {
    const location = useLocation();

    const [value, setValue] = useState(() => { // начальное значение
        const search = decodeURIComponent(location.search);
        if (search === '') return '';
        const [name, value] = search.split('=');
        if (name.trim() !== '?str') return '';
        if (value.trim() === '') return '';
        return value.trim();
    });

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            props.searchHandler(value);
        }
    }

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="text"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    onKeyUp={handleEnter}
                    placeholder="Search recipes, for example — Arrabiata"
                />
                <button
                    className="btn search"
                    onClick={() => props.searchHandler(value)}>
                    Search
                </button>
            </div>
        </div>
    );
}