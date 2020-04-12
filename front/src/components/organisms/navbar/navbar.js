import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import navLinks from './navLinks';
import { Tabs, UserDropDown } from '../../molecules';
import { Burger, Logo } from '../../atoms';
import { getUserData } from '../../../helpers/functions';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: brown;
  height: 4em;
`;

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [userData, setUserData] = useState(getUserData());
  console.log('HOOKuserData', userData);

  // useEffect(() => {
  //   setUserData(getUserData());
  // }, [JSON.parse(localStorage.getItem('userData'))]);
  const changeMenuStatus = () => {
    setMenuStatus(!menuStatus);
    console.log(menuStatus);
  };

  return (
    <>
      <Wrapper>
        <Logo />
        <Burger changeMenuStatus={changeMenuStatus} />
        <Tabs navLinks={navLinks} menuStatus={menuStatus} />
        <UserDropDown />
      </Wrapper>
    </>
  );
};

export default Navbar;
