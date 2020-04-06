import React, { useState } from 'react';
import styled from 'styled-components';
import navLinks from './navLinks';
import { Tabs } from '../../molecules';

const Wrapper = styled.div`
  height: 4em;
  background-color: brown;
`;

const Navbar = () => {
  const [pressedTab, setPressedTab] = useState();
  return (
    <>
      <Wrapper>
        <Tabs
          navLinks={navLinks}
          pressedTab={pressedTab}
          setPressedTab={setPressedTab}
        />
      </Wrapper>
    </>
  );
};

export default Navbar;
