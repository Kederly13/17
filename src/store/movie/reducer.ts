import { AnyAction } from 'redux';
import { IMovieStore } from 'store/types';

const initialState = {
    movie: null,
    error: null,
}

const movieReducer = (state: IMovieStore = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'movie/setMovie':
            return {...state, movie: action.payload}
        case 'movie/setErrorMovie':
            return {...state, movie: action.payload}
        default:
            return state;
    }
};

export { movieReducer };