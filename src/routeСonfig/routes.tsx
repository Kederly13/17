import { RouteProps } from 'react-router-dom';

import { About } from 'scenes/About';
import { Categories } from "scenes/Categories";
import { Main } from 'scenes/Main';
import { Search } from 'scenes/Search';
import { SingleMovie } from 'scenes/SingleMovie';


export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  MOVIES = 'movies',
  MOVIE = 'movie',
  SEARCH = 'search'
};

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.MOVIES]: '/movies',
  [AppRoutes.MOVIE]: '/movies/:id',
  [AppRoutes.SEARCH]: '/search'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: routePath.home,
    element: <Main />
  },
  [AppRoutes.ABOUT]: {
    path: routePath.about,
    element: <About />
  },
  [AppRoutes.MOVIES]: {
    path: routePath.movies,
    element: <Categories />
  },
  [AppRoutes.MOVIE]: {
    path: routePath.movie,
    element: <SingleMovie />
  },
  [AppRoutes.SEARCH]: {
    path: routePath.search,
    element: <Search />
  }
};