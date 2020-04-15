import React, { useState } from 'react';
import navLinks from './navLinks';
import { Tabs, UserDropDownImage } from '../../molecules';
import { Burger, Logo } from '../../atoms';
import './Navbar.css';

const Navbar = ({ rootModel }) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [userInfoDropDownStatus, setUserInfoDropDownStatus] = useState(false);

  const changeUserInfoDropDownStatus = () => {
    setUserInfoDropDownStatus(!userInfoDropDownStatus);
    console.log(userInfoDropDownStatus);
  };

  const changeMenuStatus = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <>
      <div className='NavbarContainer'>
        <Logo />
        <Burger changeMenuStatus={changeMenuStatus} />
        <Tabs navLinks={navLinks} menuStatus={menuStatus} />
        <UserDropDownImage
          userPicture={rootModel.auth.user.picture}
          userDisplayName={rootModel.auth.user.displayName}
          userLoggedInStatus={rootModel.auth.loggedInStatus}
          changeUserInfoDropDownStatus={changeUserInfoDropDownStatus}
          userInfoDropDownStatus={userInfoDropDownStatus}
        />
      </div>
    </>
  );
};

export default Navbar;
