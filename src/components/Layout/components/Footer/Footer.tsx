import logo from 'assets/img/svg/logo/logo.svg'
import { Container } from 'components/Container';

import classes from './styles.module.css'

const Footer = () => (  
  <footer className={classes.footer}>
    <Container>
      <div className={classes.footerWrapper}>
        <a className={classes.logo} href="#">
          <img src={logo} alt='logo' />
        </a>
        <p>Дипломный проект</p>
        <div className={classes.signatureBlock}>
          <p className={classes.signature}>Made by Serhii Derkach</p>
        </div>
      </div>
    </Container>
  </footer>  
);

export { Footer };