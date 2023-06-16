import { useState, useEffect } from 'react';

import { IMoviesApiResponse } from 'store/movies/types';

import { MoviesAPI } from 'api/MoviesAPI';

import { CardContent } from 'components/CardContent';
import { Section } from 'components/Section';

import classes from './styles.module.css';

const CategorySearch = () => {
    const [Category, setCategory] = useState('');
    const [Movies, setMovies] = useState([]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)  => {
    event.preventDefault();

    try {
        const response =  await MoviesAPI.getCategory(Category);
        const extractedShows = response.data.map((item: IMoviesApiResponse) => {
            const { id, image, name, genres, premiered, network } = item.show;
            const country = network?.country.name;
            return { id, image, name, genres, country, premiered };
        });

        setMovies(extractedShows);
        console.log(Movies);
    } catch (e) {
        console.log('mistake');
    }
  };

    return (
        <Section className='section'>
            <CardContent>
            <form onSubmit={handleSubmit} className={classes.form}>
                <label htmlFor='input'>
                    <input 
                        type='text' 
                        placeholder='enter a category' 
                        className={classes.input} 
                        onChange={(e) => setCategory(e.target.value)} 
                    />
                </label>
                <button type='submit' className={classes.submitButton}>CLICK</button>
            </form>
            </CardContent>
        </Section>
    )
}

export { CategorySearch };