export const ACTIONS = {
    ADD: 'add',
    REMOVE: 'remove',
    CLEAR: 'clear',
}

export function favoritesReducer(state, action){
    switch (action.type){
        case ACTIONS.ADD: {
            const exists = state.some(movie => movie.imdbID === action.payload.imdbID);
            if (exists) return state;
            return [...state, action.payload];
        }

        case ACTIONS.REMOVE: {
            return state.filter(movie => movie.imdbID !== action.payload);
        }

        case ACTIONS.CLEAR:
            return [];

        default:
            return state;
    }
}