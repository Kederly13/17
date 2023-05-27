import classes from './styles.module.css';
import {useState, useEffect} from 'react';

import { Section } from 'components/Section';

import axios from 'axios';

const Preview = () => {
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
    <div className={classes.preview}>
        someadasdasdasda
    </div>
    )
}

export { Preview };