import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ path, text, pressedTab, setPressedTab }) => {
  let styles;

  if (window.location.pathname === path) {
    styles = {
      backgroundColor: 'green',
      textDecoration: 'none',
      padding: '6px',
    };
    localStorage.removeItem('currentLink', text);
  } else {
    styles = {
      backgroundColor: 'pink',
      textDecoration: 'none',
      padding: '6px',
    };
  }

  return (
    <>
      <Link style={styles} to={path}>
        {text}
      </Link>
    </>
  );
};

export default NavLink;
