import {useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'components/hooks';

import { loadMovies } from 'store/movies/action';
import { selectMovies } from 'store/movies/selectors';

import { CardContent } from 'components/CardContent';
import { CardMovie, VARIANTS } from 'components/CardMovie';
import { getYear } from 'utils/getYear';

import { CONSTANTS } from 'constants/constants';

import classes from './styles.module.css';


const PreviewMovies = () => {
    const dispatch = useAppDispatch();
    const moviesList = useAppSelector(selectMovies);

    useEffect(() => {
        dispatch(loadMovies(CONSTANTS.GIRLS));
    }, [dispatch]);

    return (
        <CardContent className={classes.previewWrapper}>
            {moviesList.map(({ id, image, name, premiered, country, genres }) => (
                <CardMovie
                    key={id}
                    id={id}
                    image={image?.medium}
                    name={name}
                    year={getYear(premiered)}
                    country={country}
                    genres={genres}
                    variant={VARIANTS.PRIMARY}
                />
            ))}
        </CardContent> 
    );
};

export { PreviewMovies };