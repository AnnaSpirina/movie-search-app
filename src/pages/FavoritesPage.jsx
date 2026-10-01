import MovieList from "../components/Movie/MovieList";
import { useFavorites } from "../hooks/useFavorites";
import { Link } from "react-router-dom";

function FavoritesPage() {
  const { favorites, clearFavorites } = useFavorites();

  const handleClearClick = () => {
    const isConfirmed = window.confirm(
      "Вы уверены, что хотите удалить все фильмы из избранного? Это действие нельзя отменить."
    );

    if (isConfirmed) {
      clearFavorites();
    }
  }

  return (
    <div>
      <div className="header-page">
        <h1>Избранное</h1>
        {(favorites.length > 0) && <button className="button button-transparent" onClick={handleClearClick}>Убрать все из избранного</button>}
      </div>
      {
        favorites.length > 0 ?
          <MovieList movies={favorites}/> 
          : <div>В Избранном пока нет фильмов. Найдите фильм на <Link to='/'>главной</Link> и добавьте его в Избранное.</div>
      }
    </div>
  )
}

export default FavoritesPage