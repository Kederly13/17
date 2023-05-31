import { AnyAction } from 'redux';
import { Istore } from 'store/types';

const initialState = {
    movies: [],
    error: null,
}

const moviesReducer = (state: Istore = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'movies/setMoviews':
            return {...state, movies: action.payload}
        case 'movies/setErrorMovies':
            return {...state, movies: action.payload}
        default:
            return state;
    }
};

export { moviesReducer }