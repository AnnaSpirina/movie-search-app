import { useFavorites } from "../../hooks/useFavorites";
import styles from './ButtonFavorite.module.css';

function ButtonFavorite({movie, variant}){
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();
    const isFavoriteMovie = isFavorite(movie.imdbID);

    const handleFavoriteClick = () => {
        if (isFavoriteMovie){
            removeFavorite(movie.imdbID);
        }
        else{
            addFavorite({
                imdbID: movie.imdbID,
                Title: movie.Title,
                Year: movie.Year,
                Poster: movie.Poster,
                Type: movie.Type
            });
        }
    }
    return(
        <>
            {(variant === "icon") ?
                <button type="button" aria-pressed={isFavoriteMovie} aria-label={isFavoriteMovie ? "Убрать из избранного" : "Добавить в избранное"} onClick={handleFavoriteClick}>
                    <img src={isFavoriteMovie ? "/images/heart-purple.svg" : "/images/heart-white.svg"} alt="" className={styles.heartIcon} />
                </button> :
                <button className="button button-purple" aria-pressed={isFavoriteMovie} type="button" onClick={handleFavoriteClick}>♡ {isFavoriteMovie ? "Убрать из избранного" : "Добавить в избранное"}</button>
            }
        </>
    );
}

export default ButtonFavorite;