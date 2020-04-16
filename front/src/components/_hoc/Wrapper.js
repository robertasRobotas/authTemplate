import React from 'react';
import { Navbar } from '../organisms';

const Wrapper = ({ history, rootModel, children, location }) => {
  return (
    <>
      <Navbar history={history} rootModel={rootModel} /> {children}
    </>
  );
};

export default Wrapper;
