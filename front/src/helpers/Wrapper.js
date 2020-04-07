import React from 'react';
import { Navbar } from '../components/organisms';

const Wrapper = (Page) => () => {
  return (
    <>
      <Navbar />
      <Page />
    </>
  );
};

export default Wrapper;
