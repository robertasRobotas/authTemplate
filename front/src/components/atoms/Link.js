import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ path, text, pressedTab, setPressedTab }) => {
  let styles;

  if (localStorage.getItem('currentLink') === text) {
    styles = {
      backgroundColor: 'green',
      textDecoration: 'none',
      padding: '6px',
    };
  } else {
    styles = {
      backgroundColor: 'pink',
      textDecoration: 'none',
      padding: '6px',
    };
  }

  const setCurrentLink = ({ text }) => {
    localStorage.setItem('currentLink', text);
  };

  return (
    <>
      <Link
        style={styles}
        to={path}
        onClick={() => {
          setCurrentLink({ text });
        }}>
        {text}
      </Link>
    </>
  );
};

export default NavLink;
