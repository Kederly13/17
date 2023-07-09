import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

import { routePath } from 'routeСonfig/routes';

import { Container } from 'components/Container';

import logo from 'assets/img/svg/logo/logo.svg'

import classes from './styles.module.css'

const Header = () => {
  const [isActiveMenu, setActiveMenu] = useState(false);

  const linkClass = classes.navLink;

  const getActiveLink = ({ isActive }: { isActive: boolean }) => `${isActive ? `${linkClass} ${classes.linkActive}` : linkClass}`;

  const [isScroll, setScroll] = useState<boolean>(false);
  
  const handleClick = () => {
    setActiveMenu(!isActiveMenu);
    setScroll(true);
  };

  const handleScroll = () => {
    const scroll = window.scrollY ?? document.documentElement.scrollTop;
    if(scroll > 10) {
      setScroll(true)
    } else {
      setScroll(false)
      setActiveMenu(false);
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
            <NavLink onClick={() => setActiveMenu(false)} to={routePath.home}>
                <img src={logo} alt='logo' className={classes.logo} />
            </NavLink>
            <nav className={`${classes.nav} ${isActiveMenu ? classes.active : ''}`}>
              <ul className={classes.navList}>
                <li className={classes.listItem}>
                  <NavLink onClick={() => setActiveMenu(false)} to={routePath.home} className={getActiveLink}>
                    Главная
                  </NavLink>
                </li>
                <li className={classes.listItem}>
                  <NavLink onClick={() => setActiveMenu(false)} to={routePath.movies} className={getActiveLink}>
                    Фильмы по категории
                  </NavLink>
                </li>
                <li className={classes.listItem}>
                <NavLink onClick={() => setActiveMenu(false)} to={routePath.about} className={getActiveLink}>
                  О нас
                </NavLink>
                </li>
                <li className={classes.listItem}>
                  <NavLink onClick={() => setActiveMenu(false)} to={routePath.search} className={getActiveLink}>
                    Поиск
                  </NavLink>
                </li>
              </ul>
            </nav>
            <button onClick={handleClick} className={`${classes.menuButton} ${isActiveMenu ? classes.active : ''}`} type="button">
              <span className={classes.burgerLine}></span>
              <span className={classes.burgerLine}></span>
              <span className={classes.burgerLine}></span>
            </button>
          </div>
        </Container>
      </header>
    )
  };
  
  export { Header };