import React, { useState } from 'react';
import styled from 'styled-components';
import navLinks from './navLinks';
import { Tabs } from '../../molecules';
import { Burger } from '../../atoms';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: brown;
  height: 4em;
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
        <Tabs navLinks={navLinks} menuStatus={menuStatus} />
      </Wrapper>
    </>
  );
};

export default Navbar;
