import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

import { routePath } from 'routeСonfig/routes';

import { Container } from 'components/Container';

import logo from 'assets/img/svg/logo/logo.svg'

import classes from './styles.module.css'


const Header = () => {

  const getActiveLink = ({ isActive }: { isActive: boolean }) => `${isActive ? classes.LinkActive : ''}`;

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
              <NavLink to={routePath.home} className={getActiveLink}>
                Главная
              </NavLink>
              <NavLink to={routePath.movies} className={getActiveLink}>
                Фильмы по категории
              </NavLink>
              <NavLink to={routePath.about} className={getActiveLink}>
                О нас
              </NavLink>
              <NavLink to={routePath.search} className={getActiveLink}>
                Поиск
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    )
  }
  
  export { Header };