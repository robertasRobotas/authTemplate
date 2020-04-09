import React, { useState } from 'react';
import styled from 'styled-components';
import navLinks from './navLinks';
import { Tabs } from '../../molecules';

const Wrapper = styled.div`
  background-color: green;
`;

const SmallNavbar = () => {
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

export default SmallNavbar;
