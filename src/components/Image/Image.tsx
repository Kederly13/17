import classNames from 'classnames';
import classes from './styles.module.css';
import imageDefault from 'assets/img/background/background.png';

interface IImageProps {
  alt: string,
  image: string,
  className?: string,
};

const Image: React.FC<IImageProps> = ({ alt, image, className }) => {
  return (
    <div className={classNames(classes.imageBlock, className)}>
      <img src={image ?? imageDefault} alt={alt} />
    </div>
  );
};
  
export { Image };