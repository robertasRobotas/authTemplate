import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ResponsiveLink = styled.div`
  margin: 2em;
  display: grid;
  top: 12em;
`;

const NavLink = ({ path, text, pressedTab, setPressedTab }) => {
  let styles;

  if (window.location.pathname === path) {
    styles = {
      backgroundColor: 'green',
      textDecoration: 'none',
      padding: '6px',
      letterSpacing: '2px',
    };
    localStorage.removeItem('currentLink', text);
  } else {
    styles = {
      backgroundColor: 'pink',
      textDecoration: 'none',
      padding: '6px',
      letterSpacing: '2px',
    };
  }

  return (
    <ResponsiveLink>
      <Link style={styles} to={path}>
        {text}
      </Link>
    </ResponsiveLink>
  );
};

export default NavLink;
