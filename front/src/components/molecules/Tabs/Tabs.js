import React from 'react';
import styled from 'styled-components';
import { Link } from '../../atoms';

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

  @media only screen and (max-width: 600px) {
    /* For mobile phones: */
    background-color: grey;
    width: 100%;
  }
`;

const NavBarTabs = ({ navLinks, pressedTab, setPressedTab }) => (
  <Tabs>
    {navLinks.map((link, i) => (
      <Link
        key={i}
        path={link.path}
        text={link.text}
        pressedTab={pressedTab}
        setPressedTab={setPressedTab}
      />
    ))}
  </Tabs>
);

export default NavBarTabs;
