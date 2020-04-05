import React, { useEffect } from 'react';
import axios from 'axios';
import { getUserData } from '../apiCalls/user';

const Main = () => {
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      MAIN PAGE <button>aaaaa</button>
    </>
  );
};

export default Main;
