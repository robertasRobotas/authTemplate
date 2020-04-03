import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import { Main, Login } from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Main} />
      <Route path='/login' exact component={Login} />
    </BrowserRouter>
  );
};

export default Router;
