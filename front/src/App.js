import React, { useEffect } from 'react';
import Router from './router';
import { getUserData } from './apiCalls/user';
import AuthModel from './store/AuthModel';
import { Main, Login } from './components/pages';

const rootModel = AuthModel.create({
  user: {
    displayName: 'Rovertas',
    id: 'xxx',
    email: '@lopas',
    picture: ' asdfsadfsdf',
  },
});

const App = () => {
  const store = AuthModel;
  getUserData();
  return (
    <>
      <Login />
      <Main rootModel={store} />
    </>
  );
};

export default App;
