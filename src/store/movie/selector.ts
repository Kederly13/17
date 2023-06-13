import { IMovieStore } from './types';
import { IMoviesDetail } from 'types/IMoviesDetail';

export const selectMovie = (state: { movieReducer: IMovieStore }): IMoviesDetail | null =>
  state.movieReducer.movie;


export const selectError = (state: { moviesReducer: IMovieStore }): string | null =>
  state.moviesReducer.error;