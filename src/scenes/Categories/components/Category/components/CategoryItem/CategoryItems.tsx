import {useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'components/hooks';

import { loadMovies } from 'store/movies/action';
import { selectMovies } from 'store/movies/selectors';
import { routeMain as routeMovieDetails } from 'scenes/SingleMovie/routes';

import { CardContent } from 'components/CardContent';
import { CardMovie, VARIANTS } from 'components/CardMovie';

import { CONSTANTS } from 'constants/constants';

import classes from './styles.module.css';

const CategoryItems = () => {
    const dispatch = useAppDispatch();
    const moviesList = useAppSelector(selectMovies);

    useEffect(() => {
        dispatch(loadMovies(CONSTANTS.HORROR));
    }, [dispatch]);

    return (
        <CardContent className={classes.categoryWrapper}>
            {moviesList.map(({ id, image, name, genres }) => (
                <CardMovie
                    key={id}
                    id={id}
                    image={image?.medium}
                    name={name}
                    genres={genres}
                    variant={VARIANTS.SECONDARY}
                />
            ))}
        </CardContent>
    );
};

export { CategoryItems };
