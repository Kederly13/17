import classses from './styles.module.css';
import imageDefault from 'assets/img/background/background.png';

interface IImageProps {
  alt: string,
  image: string,
};

const Image: React.FC<IImageProps> = ({ alt, image }) => {
  return (
    <div className={classses.imageBlock}>
      <img src={image ?? imageDefault} alt={alt} />
    </div>
  );
};
  
export { Image };