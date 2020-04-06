import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from '../atoms';

const Tabs = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(12, 1fr);
  text-align: center;
  padding-top: 1em;

  background-color: blue;
`;

const NavBarTabs = ({ navLinks, pressedTab, setPressedTab }) => (
  <Tabs>
    {navLinks.map((link, i) => (
      <Link
        path={link.path}
        text={link.text}
        pressedTab={pressedTab}
        setPressedTab={setPressedTab}
      />
    ))}
  </Tabs>
);

export default NavBarTabs;
