import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

import { routePath } from 'routeСonfig/routes';

import { Container } from 'components/Container';

import logo from 'assets/img/svg/logo/logo.svg'

import classes from './styles.module.css'


const Header = () => {

  let linkClass = classes.navLink;

  const getActiveLink = ({ isActive }: { isActive: boolean }) => `${isActive ?  `${classes.navLink} ${classes.LinkActive}` : classes.navLink}`;

  const [isScroll, setScroll] = useState(false);

  const handleScroll = () => {
    const scroll = window.scrollY ?? document.documentElement.scrollTop;
    if(scroll > 10) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
      <header className={classNames(classes.header, {
        [classes.scroll]: isScroll
      })}>
        <Container>
          <div className={classes.headerWrapper}>
            <a href="!#" className={classes.logo}>
              <img src={logo} alt='logo' />
            </a>
            <nav className={classes.nav}>
              <ul className={classes.navList}>
                <li className={classes.listItem}>
                  <NavLink to={routePath.home} className={getActiveLink}>
                    Главная
                  </NavLink>
                </li>
                <li className={classes.listItem}>
                  <NavLink to={routePath.movies} className={getActiveLink}>
                    Фильмы по категории
                  </NavLink>
                </li>
                <li className={classes.listItem}>
                <NavLink to={routePath.about} className={getActiveLink}>
                  О нас
                </NavLink>
                </li>
                <li className={classes.listItem}>
                  <NavLink to={routePath.search} className={getActiveLink}>
                    Поиск
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className={classes.menuButton}></div>
            </div>
        </Container>
      </header>
    )
  }
  
  export { Header };