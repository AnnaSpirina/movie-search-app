import { Link } from "react-router-dom";
import { NO_IMAGE_URL } from "../../utils/constants";
import { useState } from "react";

function MovieCard({movie}){
    const [hasImageError, setHasImageError] = useState(false);
    const posterUrl = (hasImageError || movie.Poster === "N/A") ? NO_IMAGE_URL : movie.Poster;

    return (
        <Link to={`/movie/${movie.imdbID}`}>
            <img src={posterUrl} loading="lazy" alt="" onError={() => setHasImageError(true)}/>
            <span>{movie.Year}</span>
            <span>{movie.Title}</span>
            <span>{movie.Type}</span>
        </Link>
    );
}

export default MovieCard;