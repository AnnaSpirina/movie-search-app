import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from "./SearchBar.module.css"
import { useTheme } from '../../hooks/useTheme';

function SearchBar(){
    const [searchParams] = useSearchParams();
    const qValue = searchParams.get('q');
    const [inputValue, setInputValue] = useState(qValue ? qValue : "");
    const { theme } = useTheme();
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

    const handleClear = () => {
        setInputValue('');
        navigate({ pathname: '/', search: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.searchWrapperWithIcon}>
                <img alt="" className={styles.searchIcon} src={`/images/loupe-${(theme === "dark") ? "white" : "gray"}.svg`}/>
                <input
                    type="search"
                    value={inputValue}
                    onChange={handleChangeInput}
                    placeholder="Поиск фильмов..."
                    aria-label="Поиск фильмов"
                    className={styles.searchBar}
                />
                {inputValue && (
                    <button
                        type="button"
                        aria-label="Очистить поиск"
                        className={styles.clearButton}
                        onClick={handleClear}
                    >
                        ⨉
                    </button>
                )}
            </div>
        </form>
    )
}

export default SearchBar;