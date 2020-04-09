import React, { useState, useLayoutEffect } from 'react';
import LargeNavigation from './LargeNavigation';
import SmallNavigation from './SmallNavigation';

const Navbar = () => {
  const [windowSize, setWindowSize] = useState();
  useLayoutEffect(() => {
    console.log(window.innerWidth);
    setWindowSize(window.innerWidth);
  }, [window.innerWidth]);

  return <>{windowSize > 600 ? <>a</> : <>b</>}</>;
};

export default Navbar;
