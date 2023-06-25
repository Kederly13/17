import { useState, ChangeEvent } from 'react';
import { CardMovie, VARIANTS } from 'components/CardMovie';
import { routeMain as routeMovieDetails } from 'scenes/SingleMovie';

import { IMoviesApiResponse } from 'store/movies/types';

import { MoviesAPI } from 'api/MoviesAPI';
import { getErrorMessage } from 'utils/getErrorMessage';

import { CardContent } from 'components/CardContent';
import { Section } from 'components/Section';
import { Input } from 'components/Input';
import { IMovieDetail } from 'store/movie/types';

import SearchIcon from './searchIcon.svg';

import classes from './styles.module.css';
import { ErrorResponse } from '@remix-run/router';

const CategorySearch = () => {
    const [category, setCategory] = useState<string>('');
    const [movies, setMovies] = useState<IMovieDetail[]>([]);
    const [errorReponse, setErrorResponse] = useState<string>('данных пока нет, введите запрос');
    const [validate, setValidate] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setCategory(value); 

      if (value.trim() !== '') {  
        setValidate(true);  
      } else {
        setValidate(false);
      }      
    };

    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //   const { value } = e.target;
    //   setCategory(prevCategory => {
    //     const newCategory = value.trim();
    //     setValidate(newCategory !== '');
    //     return newCategory;
    //   });
    // };
      
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)  => {
      event.preventDefault();

      if (validate) {
        try {
          const { data } = await MoviesAPI.getCategory(category);
          
          if (!!data.length) {
            const extractedShows = data.map((item: IMoviesApiResponse) => {
              const { id, image, name, genres, premiered, network } = item.show;
              const country = network?.country.name;
              return { id, image, name, genres, country, premiered };
            });
    
            setMovies(extractedShows);
          } else {
            setErrorResponse('Результатов нет, попробуйте что то другое');
          }
          
        } catch (error) {
          setErrorResponse(getErrorMessage(error));
        }
      } else {
        setErrorResponse('данных пока нет, введите запрос');
        setMovies([]);
      }
    };

    return (
      <Section className='section'>
          <CardContent>
              <h2 className={classes.searchHeading}>Поиск по категории</h2>
              <form onSubmit={handleSubmit} className={classes.searchForm}>
                <div className={classes.inputWrapper}>
                  <button type='submit' className={classes.submitButton}>
                        <img src={SearchIcon} alt='Search' className={classes.searchIcon} />
                  </button>
                  <Input
                    type='search'
                    placeholder='enter a category'
                    value={category}
                    onChange={handleChange} 
                  />
                </div>
              </form>             
              <h3 className={classes.resultHeading}>Результаты поиска:</h3>
              {movies.length > 0 ? (
                  <div className={classes.searchWrapper}>
                      {movies.map(({ id, image, name, genres }) => (
                        <CardMovie
                          key={id}
                          url={routeMovieDetails(id.toString())}
                          image={image?.medium}
                          name={name}
                          genres={genres}
                          variant={VARIANTS.SECONDARY}
                        />
                      ))}
                  </div>
              ) : 
              <p>{errorReponse}</p>
              }
          </CardContent>
      </Section>
    )
};

export { CategorySearch };