import React from 'react';
import Wrapper from '../../../helpers/Wrapper';

const Main = ({ userData }) => {
  console.log('userDataxxx', userData);

  return (
    <>
      MAIN PAGE <button>Get user data</button>
    </>
  );
};

export default Wrapper(Main);
