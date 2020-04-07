import React from 'react';
import axios from 'axios';
import { Route, Router } from 'react-router-dom';
import { Main, Login, About, Contact } from './pages';
import history from './history';

const Routes = () => {
  return (
    <Router history={history}>
      <Route path='/login' exact component={Login} />
      <Route path='/' exact component={Main} />
      <Route path='/about' exact component={About} />
      <Route path='/contact' exact component={Contact} />
    </Router>
  );
};

export default Routes;
