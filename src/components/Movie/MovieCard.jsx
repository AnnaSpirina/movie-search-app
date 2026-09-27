import { Link } from "react-router-dom";

function MovieCard({movie}){
    return (
        <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster}/>
            <span>{movie.Year}</span>
            <span>{movie.Title}</span>
            <span>{movie.Type}</span>
        </Link>
    );
}

export default MovieCard;