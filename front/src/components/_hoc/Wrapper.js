import React from 'react';
import { Navbar } from '../organisms';
import { Spinner } from '../atoms';

const Wrapper = ({ rootModel, children, location }) => {
  console.log(rootModel);
  return (
    <>
      {rootModel.auth.isLoggedIn ? (
        <>
          <Navbar /> {children}
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Wrapper;
