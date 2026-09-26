// Базовый URL и ключ API для OMDB API
const API_KEY_OMDB = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL_OMDB = 'https://www.omdbapi.com/';
// URL изображения по умолчанию, если постер отсутствует
const NO_IMAGE_URL = '/images/no-poster.svg';

export { API_KEY_OMDB, BASE_URL_OMDB, NO_IMAGE_URL };