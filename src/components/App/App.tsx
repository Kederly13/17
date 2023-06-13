import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Main, routeMain as MainPage } from 'scenes/Main';
import { Categories, routeMain as CategoriesPage } from 'scenes/Categories';
import { Search, routeMain as SearchPage } from 'scenes/Search';
import { About, routeMain as AboutPage } from 'scenes/About';
import { SingleMovie, routeMain as SingleMoviePage } from 'scenes/SingleMovie';


import { Layout } from '../Layout';

const App = () => (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path={MainPage()} element={<Main/>} />
            <Route path={CategoriesPage()} element={<Categories />} />
            <Route path={SearchPage()} element={<Search />} />
            <Route path={AboutPage()} element={<About />} />
            <Route path={SingleMoviePage()} element={<SingleMovie />} />
          </Routes>
      </Layout>
    </BrowserRouter>
)

export { App };
