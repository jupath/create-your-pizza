import React, { Fragment } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/layout/Header';
import Home from '../components/pages/Home';
import Order from '../components/pages/Order';
import PreviousOrders from '../components/pages/PreviousOrders';
import PageNotFound from '../components/pages/PageNotFound';
import PrivateRoute from './PrivateRoute';

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/order" component={Order} />
        <PrivateRoute path="/previousorders" component={PreviousOrders} />
        <Route component={PageNotFound} />
      </Switch>
    </Fragment>
  </Router>
);

export default AppRouter;
