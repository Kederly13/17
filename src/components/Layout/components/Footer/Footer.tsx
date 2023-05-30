import logo from 'assets/img/svg/logo/logo.svg'

import classes from './styles.module.css'

const Footer = () => (  
  <footer className={classes.footer}>
      <a className={classes.logo} href="#">
            <img src={logo} alt='logo' />
          </a>
      <p>Дипломный проект</p>
      <div>
        <p>Made by Serhii Derkach</p>
      </div>
  </footer>  
);

export { Footer };