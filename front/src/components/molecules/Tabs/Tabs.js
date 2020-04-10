import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from '../../atoms';
import styles from './Tabs.module.css';

const Tabs = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  background-color: black;
  grid-column: 1/4;
  height: 100vh;
  z-index: 2;
  width: 40%;
  transition: 1s;
  min-width: 200px;
  top: 4em;
  @media only screen and (min-width: 600px) {
    background-color: yellow;
  }
`;

const NavBarTabs = ({ navLinks, menuStatus }) => {
  return (
    <Tabs className={menuStatus ? styles.open : styles.closed}>
      {navLinks.map((link, i) => (
        <Link class key={i} path={link.path} text={link.text} />
      ))}
    </Tabs>
  );
};

export default NavBarTabs;
