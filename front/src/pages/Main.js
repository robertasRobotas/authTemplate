import React, { useEffect } from 'react';
import axios from 'axios';
import { getUserData } from '../apiCalls/user';
import Wrapper from '../helpers/Wrapper';

const Main = () => {
  useEffect(() => {
    getUserData();
  }, []);

  const userData = () => {
    console.log(JSON.parse(localStorage.getItem('userData')));
  };

  return (
    <>
      MAIN PAGE <button onClick={userData}>Get user data</button>
    </>
  );
};

export default Wrapper(Main);
