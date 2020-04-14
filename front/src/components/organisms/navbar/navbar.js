import React, { useState } from 'react';
import navLinks from './navLinks';
import { Tabs, UserDropDown } from '../../molecules';
import { Burger, Logo } from '../../atoms';
import './Navbar.css';

const Navbar = ({ rootModel }) => {
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
        <UserDropDown picture={rootModel.auth.user.picture} />
      </div>
    </>
  );
};

export default Navbar;
