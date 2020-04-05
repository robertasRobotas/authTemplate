import React, { useEffect } from 'react';
import axios from 'axios';
import { getUserData } from '../apiCalls/user';
import { Navbar } from '../components/organisms';

const Main = () => {
  useEffect(() => {
    getUserData();
  }, []);

  const userData = () => {
    console.log(JSON.parse(localStorage.getItem('userData')));
  };

  return (
    <>
      <Navbar />
      MAIN PAGE <button onClick={userData}>Get user data</button>
    </>
  );
};

export default Main;
