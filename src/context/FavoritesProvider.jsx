import { useReducer, useEffect } from "react";
import { FavoritesContext } from "./FavoritesContext";
import { favoritesReducer, ACTIONS } from "./favoritesReducer";
import { FAVORITES_STORAGE_KEY } from "../utils/constants";

function loadFavorites(){
    try{
        const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
        if (!saved) return [];
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : [];
    } catch{
        return [];
    }
}

export function FavoritesProvider({children}){
    const [favorites, dispatch] = useReducer(favoritesReducer, [], loadFavorites);

    const addFavorite = (movie) => dispatch({type: ACTIONS.ADD, payload: movie});
    const removeFavorite = (imdbID) => dispatch({type:  ACTIONS.REMOVE, payload: imdbID});
    const clearFavorites = () => dispatch({type: ACTIONS.CLEAR});
    const isFavorite = (imdbID) => favorites.some(movie => movie.imdbID === imdbID);

    const value = {favorites, addFavorite, removeFavorite, clearFavorites, isFavorite};

    useEffect(() => {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    }, [favorites]);

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}