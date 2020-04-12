import React from 'react';
import Wrapper from '../../../helpers/Wrapper';

const Main = () => {
  console.log('main');
  const userData = () => {
    console.log('x', JSON.parse(localStorage.getItem('userData')));
  };

  return (
    <>
      MAIN PAGE <button onClick={userData}>Get user data</button>
    </>
  );
};

export default Wrapper(Main);
