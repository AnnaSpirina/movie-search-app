import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { searchMovies } from '../utils/api';
import MovieList from '../components/Movie/MovieList';
import MovieFilters from '../components/Movie/MovieFilters';

function HomePage() {
    const [searchParams] = useSearchParams();
    const qValue = searchParams.get('q');
    const typeValue = searchParams.get('type');

    const fetchMovies = useCallback(
        () => searchMovies({text: qValue, type: typeValue}),
        [qValue, typeValue]
    )

    const { data, loading, error } = useFetch(qValue ? fetchMovies : null);

    if (!qValue) return <div>Введите название фильма в поиске</div>;

    const movies = data?.movies ?? [];
    const total = data?.totalResults ?? 0;

    const searchContent = () => {
        if (loading) return <div>Загрузка...</div>;
        if (error) return <div>{error}</div>;
        return <MovieList movies={movies} />
    }
    
    return (
        <div>
            <h1>Результаты поиска</h1>
            <MovieFilters />
            {(!loading && !error) && <div>Найдено: <span>{total}</span></div>}
            {searchContent()}
        </div>
    );
}

export default HomePage