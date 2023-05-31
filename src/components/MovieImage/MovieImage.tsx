import movie from './movie.jpg';

import classses from './styles.module.css';

const MovieImage = ({ alt, className}) => (
    <div className={classses.imageBlock}>
        <img src={movie} alt="movie" />
    </div>
)

export { MovieImage };