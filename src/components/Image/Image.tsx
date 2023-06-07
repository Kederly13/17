import classses from './styles.module.css';
import { ImageDefault } from 'components/ImageDefault';

interface IImageProps {
  alt: string,
  image: string,
};

const Image: React.FC<IImageProps> = ({ alt, image }) => {
  return (
    <div className={classses.imageBlock}>
      {image ? (
        <img src={image}  alt={alt} />
      ) : <ImageDefault/>}
    </div>
  );
};
  
export { Image };