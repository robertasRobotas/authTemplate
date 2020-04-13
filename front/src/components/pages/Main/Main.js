import React, { useState, useEffect } from 'react';
import { Spinner } from '../../atoms';
import { Navbar } from '../../organisms/';

const Main = () => {
  const [userData, setUserData] = useState();
  console.log('userrrrr', localStorage.getItem('userData'));
  useEffect(() => {
    function checkUserData() {
      console.log('item', item);
      const item = localStorage.getItem('userData');

      if (item) {
        setUserData(item);
        window.removeEventListener('storage', checkUserData);
      }
    }

    window.addEventListener('storage', checkUserData);
  }, []);

  return <>{userData ? <Navbar /> : <Spinner />}</>;
};

export default Main;
