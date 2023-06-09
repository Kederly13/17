import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

import { routeMain as routeMainPage } from 'scenes/Main';
import { routeMain as routeCategoryPage } from 'scenes/Categories';
import { routeMain as routeSearchPage } from 'scenes/Search';
import { routeMain as routeAboutPage } from 'scenes/About';

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
              <NavLink to={routeMainPage()} className={getActiveLink}>
                Главная
              </NavLink>
              <NavLink to={routeCategoryPage()} className={getActiveLink}>
                Фильмы по категории
              </NavLink>
              <NavLink to={routeAboutPage()} className={getActiveLink}>
                О нас
              </NavLink>
              <NavLink to={routeSearchPage()} className={getActiveLink}>
                Поиск
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    )
  }
  
  export { Header };