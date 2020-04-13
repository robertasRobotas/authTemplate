import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import navLinks from './navLinks';
import { Tabs, UserDropDown } from '../../molecules';
import { Burger, Logo } from '../../atoms';
import './Navbar.css';

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const changeMenuStatus = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <>
      <div className='NavbarContainer'>
        <Logo />
        <Burger changeMenuStatus={changeMenuStatus} />
        <Tabs navLinks={navLinks} menuStatus={menuStatus} />
        <UserDropDown />
      </div>
    </>
  );
};

export default Navbar;
