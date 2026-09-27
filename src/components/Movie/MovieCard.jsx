import { Link } from "react-router-dom";
import { NO_IMAGE_URL } from "../../utils/constants";
import { useState } from "react";
import styles from './MovieCard.module.css';

function MovieCard({movie}){
    const [hasImageError, setHasImageError] = useState(false);
    const posterUrl = (hasImageError || movie.Poster === "N/A") ? NO_IMAGE_URL : movie.Poster;

    return (
        <div className={styles.movieCard}>
            <Link to={`/movie/${movie.imdbID}`}>
                <div className={styles.movieContainer}>
                    <img src={posterUrl} className={styles.moviePoster} loading="lazy" alt="" onError={() => setHasImageError(true)}/>
                    <div className={styles.movieYear}>{movie.Year}</div>
                </div>
                <div className={styles.movieTitle}>{movie.Title}</div>
                <div className={styles.movieType}>{movie.Type}</div>
            </Link>
        </div>
    );
}

export default MovieCard;