import MovieCard from "./MovieCard";
import styles from './MovieList.module.css';
import MovieCardSkeleton from "./MovieCardSkeleton";
import { PAGE_SIZE } from "../../utils/constants";

function MovieList({movies, loading=false}){
    return (
        <div className={styles.moviesGrid}>
            {loading ?
                Array.from({ length: PAGE_SIZE }, (_, i) => (
                    <MovieCardSkeleton key={i} />
                ))
            : movies.map(movie => (
                <MovieCard key={movie.imdbID} movie={movie}/>
            ))}
        </div>
    );
}

export default MovieList;