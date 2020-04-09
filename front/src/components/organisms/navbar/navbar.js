import React, { useState } from 'react';
import styled from 'styled-components';
import navLinks from './navLinks';
import { Tabs } from '../../molecules';
import { Burger } from '../../atoms';

const Wrapper = styled.div`
  background-color: brown;
`;

const SmallMenuWrapper = styled.div`
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const changeMenuStatus = () => {
    setMenuStatus(!menuStatus);
    console.log(menuStatus);
  };

  return (
    <>
      <Wrapper>
        <Burger changeMenuStatus={changeMenuStatus} />
        <Tabs navLinks={navLinks} />
      </Wrapper>
    </>
  );
};

export default Navbar;
