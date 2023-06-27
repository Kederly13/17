import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { routeConfig } from 'routeСonfig/routes';

import { Layout } from '../Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
        <Routes>
          {Object.values(routeConfig).map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))}
        </Routes>
    </Layout>
  </BrowserRouter>
);

export { App };
