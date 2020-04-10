import React from 'react';
import styled from 'styled-components';
import { Link } from '../../atoms';
import styles from './Tabs.module.css';
import './Tabs.module.css';

const ResponsiveLinks = styled.div`
  margin: 2em;
  display: grid;

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
  }
`;

const NavBarTabs = ({ navLinks, menuStatus }) => {
  return (
    <ul className={menuStatus ? styles.open : styles.closed}>
      <ResponsiveLinks>
        {navLinks.map((link, i) => (
          <Link key={i} path={link.path} text={link.text} />
        ))}
      </ResponsiveLinks>
    </ul>
  );
};

export default NavBarTabs;
