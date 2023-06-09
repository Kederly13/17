import { AnyAction } from 'redux';
import { IMovieStore } from 'store/types';

const initialState = {
    movie: null,
    error: null,
}

const moviesReducer = (state: IMovieStore = initialState, action: AnyAction) => {
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