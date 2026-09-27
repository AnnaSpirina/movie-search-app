import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from "../utils/api";
import MovieList from '../components/Movie/MovieList';

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams] = useSearchParams();
    const qValue = searchParams.get('q');

    useEffect(() => {
        if (!qValue) return;
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await searchMovies({text: qValue});
                setMovies(data.movies);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [qValue]);

    if (!qValue) return <div>Введите название фильма в поиске</div>;
    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div>
            <h1>Результаты поиска</h1>
            <MovieList movies={movies}/>
        </div>
    );
}

export default HomePage