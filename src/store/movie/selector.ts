import { IMovieStore } from './types';
import { IMoviesDetail } from 'types/IMoviesDetail';
import { IMovieDetail } from './types';

export const selectMovie = (state: { movieReducer: IMovieStore }): IMovieDetail | null =>
  state.movieReducer.movie;


export const selectError = (state: { moviesReducer: IMovieStore }): string | null =>
  state.moviesReducer.error;