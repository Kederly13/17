import { AnyAction } from 'redux';
import { IMoviesStore } from './types';

const initialState = {
    movies: [],
    error: null,
}

const moviesReducer = (state: IMoviesStore = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'movies/setMovies':
            return {...state, movies: action.payload}
        case 'movies/setErrorMovies':
            return {...state, movies: action.payload}
        default:
            return state;
    }
};

export { moviesReducer }