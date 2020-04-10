import React from 'react';
import Wrapper from '../../../helpers/Wrapper';

const Main = () => {
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
