import { useReducer } from "react";
import { FavoritesContext } from "./FavoritesContext";
import { favoritesReducer, ACTIONS } from "./favoritesReducer";

export function FavoritesProvider({children}){
    const [favorites, dispatch] = useReducer(favoritesReducer, []);

    const addFavorite = (movie) => dispatch({type: ACTIONS.ADD, payload: movie});
    const removeFavorite = (imdbID) => dispatch({type:  ACTIONS.REMOVE, payload: imdbID});
    const clearFavorites = () => dispatch({type: ACTIONS.CLEAR});
    const isFavorite = (imdbID) => favorites.some(movie => movie.imdbID === imdbID);

    const value = {favorites, addFavorite, removeFavorite, clearFavorites, isFavorite};

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}