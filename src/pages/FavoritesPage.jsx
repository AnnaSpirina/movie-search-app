import MovieList from "../components/Movie/MovieList";
import { useFavorites } from "../hooks/useFavorites";
import { Link } from "react-router-dom";

function FavoritesPage() {
  const { favorites } = useFavorites();
  return (
    <div>
      <h1>Избранное</h1>
      {
        favorites.length > 0 ?
          <MovieList movies={favorites}/> 
          : <div>В Избранном пока нет фильмов. Найдите фильм на <Link to='/'>главной</Link> и добавьте его в Избранное.</div>
      }
    </div>
  )
}

export default FavoritesPage