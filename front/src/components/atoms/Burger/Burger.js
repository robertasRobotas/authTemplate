import React from 'react';
import './burger.css';

const Burger = ({ changeMenuStatus }) => {
  return (
    <>
      <div onClick={() => changeMenuStatus()} className='nav-icon'>
        <div></div>
      </div>
    </>
  );
};

export default Burger;
