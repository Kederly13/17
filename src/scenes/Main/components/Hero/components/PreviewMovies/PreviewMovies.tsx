import axios from 'axios';
import { useState, useEffect } from 'react';

import { CardContent } from 'components/CardContent';

import { MovieImage } from 'components/MovieImage';

import classes from './styles.module.css';


const PreviewMovies = () => {

    const [moviesList, setMoviesList] = useState([]);

    const requestUrl = 'https://api.tvmaze.com/search/shows?q=girls';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(requestUrl);
                setMoviesList(response.data);
            } catch (error) {
                console.error(error)
            }
        }   
        fetchData()
    }, []);

    console.log(moviesList);

    return (

        <CardContent>
            <MovieImage/>
        </CardContent>
        
    )
}

export { PreviewMovies };