import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './index.css'
import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';

import Loader from './components/Loader';






const HomeView = lazy(() =>
  import('./views/Home/HomeView' /* webpackChunkName: "home-page" */),
);

const TodoView = lazy(() =>
  import(
    './views/TodoView/TodoView' /* webpackChunkName: "todo-page" */
  ),
);


const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route
            path="/todos"
            component={TodoView}
          />
        </Switch>
      </Suspense>
    </Container>
  )
}
export default App;
