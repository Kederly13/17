
import classses from './styles.module.css';

interface IImageProps {
  alt: string,
  image: string,
}

const Image: React.FC<IImageProps> = ({ alt, image }) => {
  return (
      <div className={classses.imageBlock}>
        <img src={image} alt={alt} />
      </div>
  );
};
  
export { Image };