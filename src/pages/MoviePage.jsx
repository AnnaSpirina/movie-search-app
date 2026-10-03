import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useCallback } from "react";
import { useFetch } from "../hooks/useFetch";
import { getMovieDetails } from "../utils/api";
import styles from './MoviePage.module.css';
import PosterMovie from "../components/UI/PosterMovie";
import { formatRuntime } from "../utils/formatRuntime";
import { translateType } from "../utils/translations";
import { formatList } from "../utils/formatList";
import ButtonFavorite from "../components/UI/ButtonFavorite";

function MoviePage() {
    const { imdbID } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const fetchMovieDetails = useCallback(
        () => getMovieDetails({imdbID, plot: "full"}),
        [imdbID]
    )

    const { data: movie, loading, error } = useFetch(fetchMovieDetails);

    const handleBack = () => {
        if (location.key === 'default') {
            navigate('/');
        } else {
            navigate(-1);
        }
    }

    const movieContent = () => {
        if (loading)
            return <div>Загрузка...</div>;
        if (error)
            return <div>{error}</div>;

        const genres = formatList(movie.Genre);
        const actors = formatList(movie.Actors);

        const movieDetails = [
            { label: 'Режиссёр', value: movie.Director },
            { label: 'Сценарий', value: movie.Writer },
            { label: 'Сборы', value: movie.BoxOffice },
            { label: 'Награды', value: movie.Awards },
        ].filter(({ value }) => value && value !== 'N/A');
        return (
            <>
                <div className={styles.movieInformation}>
                    <PosterMovie className={styles.moviePoster} src={movie.Poster}/>
                    <div className={styles.movieDescription}>
                        <h1>{movie.Title}</h1>
                        <div className={styles.movieParameter}>{movie.Year} · {translateType(movie.Type)} · {formatRuntime(movie.Runtime)}</div>
                        {movie.imdbRating !== "N/A" &&
                            <div className={styles.movieRating}>
                                <img src="/images/star.svg" alt="" />
                                {movie.imdbRating}
                                <div className={styles.imdb}>IMDb</div>
                            </div>
                        }
                        <div className={styles.moviePlot}>{movie.Plot}</div>
                        {genres.length > 0 && (
                            <div className={styles.movieGenres}>
                                {genres.map((genre) => (
                                    <div key={genre} className={styles.movieGenre}>
                                        {genre}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                {actors.length > 0 && (
                    <div className={styles.movieActorsContainer}>
                        <h2 className={styles.movieActorsTitle}>Актеры</h2>
                        <div className={styles.movieActors}>
                            {actors.map((actor) => (
                                <div key={actor} className={styles.movieActor}>
                                    <img src="/images/actor.svg" alt=""/>
                                    {actor}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {(movieDetails.length > 0) &&
                    <table className={styles.movieCharacteristic}>
                        <tbody>
                            {movieDetails.map((details) => (
                                <tr key={`${details.label}-${details.value}`}>
                                    <td>{details.label}</td>
                                    <td>{details.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </>
        );
    } 

    return (
        <div className={styles.movieContainer}>
            <div className={styles.movieActions}>
                <button className="button button-transparent" type="button" onClick={handleBack}>‹ Назад</button>
                {(!loading && !error) && <ButtonFavorite movie={movie} variant="button" />}
            </div>
            {movieContent()}
        </div>
    )
}

export default MoviePage