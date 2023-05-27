import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Main, routeMain as MainPage } from 'scenes/Main';
import { Categories, routeMain as CategoriesPage } from 'scenes/Categories';
import { Search, routeMain as SearchPage } from 'scenes/Search';
import { About, routeMain as AboutPage } from 'scenes/About';

import { Layout } from '../Layout';

const App = () => (
    <BrowserRouter>
      <Layout>
        <div className='main'>
          <Routes>
            <Route path={MainPage()} element={<Main/>} />
            <Route path={CategoriesPage()} element={<Categories />} />
            <Route path={SearchPage()} element={<Search />} />
            <Route path={AboutPage()} element={<About />} />
          </Routes>
        </div>
      </Layout>
    </BrowserRouter>
)

export { App };
