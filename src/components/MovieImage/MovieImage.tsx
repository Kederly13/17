import movie from './movie.jpg';

import classses from './styles.module.css';

interface MovieImage {
    alt: string,
    className: string,
    src: string,
}

const MovieImage: React.FC<MovieImage> = ({ alt, className, src}) => (
    <div className={classses.imageBlock}>
        <img src={movie} alt={alt} />
    </div>
)

export { MovieImage };