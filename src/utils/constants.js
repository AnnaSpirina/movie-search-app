// Базовый URL и ключ API для OMDB API
export const API_KEY_OMDB = import.meta.env.VITE_OMDB_API_KEY;
export const BASE_URL_OMDB = 'https://www.omdbapi.com/';
// URL изображения по умолчанию, если постер отсутствует
export const NO_IMAGE_URL = '/images/no-poster.svg';
// Ключ для избранного в localStorage
export const FAVORITES_STORAGE_KEY = 'movies-favorites';