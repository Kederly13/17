import {useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'components/hooks';
import { NavLink } from 'react-router-dom';

import { loadMovies } from 'store/movies/action';
import { selectMovies } from 'store/movies/selectors';
import { routeMain as routeMovieDetails } from 'scenes/SingleMovie/routes';

import { CardContent } from 'components/CardContent';

import { CardMovie, VARIANTS } from 'components/CardMovie';

import { CONSTANTS } from 'constants/constants';

import classes from './styles.module.css';

const CategoryItem = () => {

    const dispatch = useAppDispatch();
    const moviesList = useAppSelector(selectMovies);

    useEffect(() => {
        dispatch(loadMovies(CONSTANTS.HORROR));
    }, [dispatch])

    return (
        <CardContent className={classes.categoryWrapper}>
            {moviesList.map(({ id, image, name, genres }) => (
                <NavLink to={routeMovieDetails(id.toString())}>
                    <CardMovie
                        key={id}
                        image={image?.medium}
                        name={name}
                        genres={genres}
                        variant={VARIANTS.SECONDARY}
                    />
                </NavLink>
            ))}
            
        </CardContent>
    )
}

export {CategoryItem};
