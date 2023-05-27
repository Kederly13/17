import { NavLink } from 'react-router-dom';

import { routeMain as routeMainPage } from 'scenes/Main';
import { routeMain as routeCategoryPage } from 'scenes/Categories';
import { routeMain as routeSearchPage } from 'scenes/Search';
import { routeMain as routeAboutPage } from 'scenes/About';

import classes from './styles.module.css'

const Header = () => {
const getActiveLink = ({ isActive }: { isActive: boolean }) => isActive ? 'LinkActive' : '';

    return (
      <header className={classes.header}>
        <div className={classes.headerWrapper}>
          <a className={classes.logo} href="#"></a>
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
      </header>
    )
  }
  
  export { Header };