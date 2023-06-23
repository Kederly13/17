import { useState, ChangeEvent } from 'react';
import { CardMovie, VARIANTS } from 'components/CardMovie';
import { routeMain as routeMovieDetails } from 'scenes/SingleMovie';

import { IMoviesApiResponse } from 'store/movies/types';

import { MoviesAPI } from 'api/MoviesAPI';
import { getErrorMessage } from 'utils/getErrorMessage';

import { CardContent } from 'components/CardContent';
import { Section } from 'components/Section';
import { IMovieDetail } from 'store/movie/types';

import SearchIcon from './searchIcon.svg';

import classes from './styles.module.css';

const CategorySearch = () => {
    const [category, setCategory] = useState<string>('');
    const [movies, setMovies] = useState<IMovieDetail[]>([]);
    const [error, setError] = useState<string>('');
    const [validate, setValidate] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      if (value.trim() !== '') {  
        setValidate(true);
        setCategory(value);    
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
          const response = await MoviesAPI.getCategory(category);
          const extractedShows = response.data.map((item: IMoviesApiResponse) => {
            const { id, image, name, genres, premiered, network } = item.show;
            const country = network?.country.name;
            return { id, image, name, genres, country, premiered };
          });
  
          setMovies(extractedShows);
        } catch (error) {
          setError(getErrorMessage(error));
        }
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
                  <input
                      className={classes.searchInput}
                      type='text'
                      placeholder='enter a category'
                      value={category}
                      onChange={handleChange}                
                  />
                </div>
              </form>
              
              {validate === false && (
                <>
                  <h3 className={classes.resultHeading}>Результаты поиска:</h3>
                  <p className={classes.errorText}>Введите что-то</p>
                </>
              )}

              {movies.length > 0 && (
                <>
                  <h3 className={classes.resultHeading}>Результаты поиска:</h3>
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
                </>
              )}
          </CardContent>
      </Section>
    )
};

export { CategorySearch };