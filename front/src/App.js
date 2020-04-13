import React, { useEffect } from 'react';
import Router from './router';
import { getUserData } from './apiCalls/user';
import UserModel from './store/UserModel';
import { Main, Login } from './components/pages';

const rootModel = UserModel.create({
  displayName: 'Rovertas',
  id: 'xxx',
  email: '@lopas',
  picture: ' asdfsadfsdf',
});

const App = () => {
  getUserData();
  return (
    <>
      <Login />
      <Main rootModel={rootModel} />
    </>
  );
};

export default App;
