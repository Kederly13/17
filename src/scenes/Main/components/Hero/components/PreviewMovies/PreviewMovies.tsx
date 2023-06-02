import {useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'components/hooks';
import { MoviesAPI } from 'api/MoviesAPI';
import axios from 'axios';

import { loadMovies } from 'store/movies/action';
import { selectMovies } from 'store/movies/selectors';
import { CardContent } from 'components/CardContent';

import { CardMovie } from 'components/CardMovie';

import classes from './styles.module.css';


const PreviewMovies = () => {

    const dispatch = useAppDispatch();
    const moviesList = useAppSelector(selectMovies);

    useEffect(() => {
        dispatch(loadMovies());
    }, [dispatch])

   

// This Api is for testing p
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
    
    return (

        <CardContent>
            <div className={classes.previewWrapper}>
                {moviesList.map((item) => (
                    <CardMovie
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        year={item.year}
                        country={item.country}
                        genres={item.genres}
                        variant="primary"
                    />
                ))}
            </div>
        </CardContent>
        
    )
}

export { PreviewMovies };