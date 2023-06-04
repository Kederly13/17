import {useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'components/hooks';
import axios from 'axios';
import { MoviesAPI } from 'api/MoviesAPI';

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
    }, [dispatch])

    console.log(moviesList)
   

// const url = 'https://api.tvmaze.com/search/shows?q=';
// const MoviesAPI = {
//     async getGirls() {
//         try {
//             const response = await axios.get(`${url}girls`);
//             console.log(response.data);
//             return response;
//         } catch (error) {
//             console.error(error);
//             throw error;
//         }
//     }
// };

//     const result = MoviesAPI.getGirls();
//     console.log(result);

    console.log(moviesList);
    // if (moviesList && moviesList.length > 0) {
    //     console.log(moviesList[0].premiered);
    //   }

 
    return (
        <CardContent>
            <div className={classes.previewWrapper}>
                {moviesList.map(({ id, image: { medium }, name, premiered, country, genres }) => (
                    <CardMovie
                        key={id}
                        image={medium}
                        name={name}
                        year={getYear(premiered)}
                        country={country}
                        genres={genres}
                        variant={VARIANTS.PRIMARY}
                    />
                ))}
            </div> 
        </CardContent> 
    )
};

export { PreviewMovies };