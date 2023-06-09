import { AnyAction } from 'redux';
import { Istore } from 'store/types';

const initialState = {
    movies: null,
    error: null,
}

const moviesReducer = (state: Istore = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'movies/setMovie':
            return {...state, movie: action.payload}
        case 'movies/setErrorMovie':
            return {...state, movie: action.payload}
        default:
            return state;
    }
};

export { moviesReducer }