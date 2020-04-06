import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const style = { backgroundColor: 'green', textDecoration: 'none' };

const NavLink = ({ path, text }) => (
  <>
    <Link style={style} to={path}>
      {text}
    </Link>
  </>
);

export default NavLink;
