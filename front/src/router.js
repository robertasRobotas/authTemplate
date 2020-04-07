import React from 'react';
import axios from 'axios';
import { Route, Router, Switch } from 'react-router-dom';
import { Main, Login, About, Contact } from './pages';
import history from './history';
import { Navbar } from './components/organisms/index';

const Routes = () => {
  return (
    <Router history={history}>
      <Route path='/login' exact component={Login} />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
    </Router>
  );
};

export default Routes;
