import MovieCard from "./MovieCard";
import styles from './MovieList.module.css';

function MovieList({movies}){
    return (
        <div className={styles.moviesGrid}>
            {movies.map(movie => (
                <MovieCard key={movie.imdbID} movie={movie}/>
            ))}
        </div>
    );
}

export default MovieList;