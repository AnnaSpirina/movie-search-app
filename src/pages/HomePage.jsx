import { useState, useEffect } from 'react';
import { searchMovies } from "../utils/api";

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await searchMovies({text: "batman"});
                setMovies(data.movies);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div>
            <h1>Результаты поиска</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.imdbID}>
                        {movie.Title} - {movie.Year}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage