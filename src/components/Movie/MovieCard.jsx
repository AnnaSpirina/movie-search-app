import { Link } from "react-router-dom";
import styles from './MovieCard.module.css';
import PosterMovie from "../PosterMovie";
import { translateType } from "../../utils/translations";
import ButtonFavorite from "../ButtonFavorite";

function MovieCard({movie}){
    return (
        <div className={styles.movieCard}>
            <Link to={`/movie/${movie.imdbID}`}>
                <div className={styles.movieContainer}>
                    <PosterMovie className={styles.moviePoster} src={movie.Poster} loading="lazy"/>
                    <div className={styles.movieYear}>{movie.Year}</div>
                </div>
                <div className={styles.movieTitle}>{movie.Title}</div>
                <div className={styles.movieType}>{translateType(movie.Type)}</div>
            </Link>
            <ButtonFavorite movie={movie} variant="icon"/>
        </div>
    );
}

export default MovieCard;