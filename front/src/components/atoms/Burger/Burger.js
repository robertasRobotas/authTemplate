import React from 'react';
import './burger.css';

const Burger = ({ changeMenuStatus, menuStatus }) => {
  console.log('menuStatus', menuStatus);
  return (
    <>
      <div onClick={() => changeMenuStatus()} className={'not-pressed'}>
        <div></div>
      </div>
    </>
  );
};

export default Burger;
