
import classses from './styles.module.css';

interface MovieImage {
    alt: string,
    className: string,
    image: string | { medium: string; original: string };
    
}

const MovieImage: React.FC<MovieImage> = ({ alt, className, image}) => {
    let imageUrl: string;
    
    if (typeof image === 'string') {
        imageUrl = image;
      } else {
        imageUrl = image.medium; // You can choose to use 'medium' or 'original' property here
      }

    return (
        <div className={classses.imageBlock}>
        <img src={imageUrl} alt={alt} />
    </div>
    )
}
    


export { MovieImage };