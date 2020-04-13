import React from 'react';
import { Navbar } from '../components/organisms';
import { Spinner } from '../components/atoms';

const Wrapper = ({ rootModel, children }) => {
  console.log(rootModel);
  return (
    <>
      {rootModel.auth.isLoggedIn ? (
        <>
          <Navbar /> {children}
        </>
      ) : null}
    </>
  );
};

export default Wrapper;
