import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function SearchBar(){
    const [searchParams] = useSearchParams();
    const qValue = searchParams.get('q');
    const [inputValue, setInputValue] = useState(qValue ? qValue : "");
    const navigate = useNavigate();

    const handleChangeInput = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchText = inputValue.trim();
        if (searchText === "")
            return;

        const params = new URLSearchParams({ q: searchText });
        const queryString = '?' + params.toString();

        navigate({pathname: '/', search: queryString});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                value={inputValue}
                onChange={handleChangeInput}
                placeholder='Поиск фильмов...'
                aria-label='Поиск фильмов'
            />
        </form>
    )
}

export default SearchBar;