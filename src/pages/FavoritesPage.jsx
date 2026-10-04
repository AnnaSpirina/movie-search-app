import MovieList from "../components/Movie/MovieList";
import { useFavorites } from "../hooks/useFavorites";
import { useSearchParams, Link } from "react-router-dom";
import styles from "./FavoritesPage.module.css";
import { PAGE_SIZE } from "../utils/constants";
import Pagination from "../components/UI/Pagination";

function FavoritesPage() {
  const { favorites, clearFavorites } = useFavorites();
  const [searchParams] = useSearchParams();
  const pageFromUrl = Number(searchParams.get("page") ?? 1);

  const totalPages = Math.ceil(favorites.length / PAGE_SIZE);
  const page = Math.min(pageFromUrl, totalPages);

  const start = (page - 1) * PAGE_SIZE;
  const pageFavorites = favorites.slice(start, start + PAGE_SIZE);

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
        {(favorites.length > 0) && <button className="button button-transparent" onClick={handleClearClick} type="button">Убрать все из избранного</button>}
      </div>
      {
        favorites.length > 0 ?
          <MovieList movies={pageFavorites}/> 
          : <div className={styles.text}>В Избранном пока нет фильмов. Найдите фильм на <Link to='/'>главной</Link> и добавьте его в Избранное.</div>
      }
      {totalPages > 1 && <Pagination total={favorites.length} page={page}/>}
    </div>
  )
}

export default FavoritesPage