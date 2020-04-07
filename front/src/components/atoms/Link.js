import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ path, text, pressedTab, setPressedTab }) => {
  let styles;

  if (pressedTab === text) {
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

  return (
    <>
      <Link
        style={styles}
        to={path}
        onClick={() => {
          setPressedTab(text);
        }}>
        {text}
      </Link>
    </>
  );
};

export default NavLink;
