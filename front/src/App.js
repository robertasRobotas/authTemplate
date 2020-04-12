import React, { useEffect } from 'react';
import Router from './router';
import { getUserData } from './apiCalls/user';

const App = () => {
  getUserData();
  return (
    <>
      <Router />
    </>
  );
};

export default App;
