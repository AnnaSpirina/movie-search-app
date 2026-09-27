import { API_KEY_OMDB, BASE_URL_OMDB } from './constants.js';

async function searchMovies({text, page = 1, type, year}) {
    const data = await getData({s: text, page, type, y: year});
    return {movies: data.Search, totalResults: parseInt(data.totalResults, 10)};
}

async function getMovieDetails({imdbID, plot}){
    return await getData({i: imdbID, plot});
}

async function getData(options){
    const url = new URL(BASE_URL_OMDB);

    url.searchParams.set('apikey', API_KEY_OMDB);
    for (const [key, value] of Object.entries(options)) {
        if (value != null)
            url.searchParams.set(key, value);
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Ошибка при поиске: ${response.status}`);
    }
    const data = await response.json();
    if (data.Response === 'False') {
        throw new Error(`Ошибка при поиске: ${data.Error}`);
    }

    return data;
}

export { searchMovies, getMovieDetails };