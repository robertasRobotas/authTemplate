import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationLink.css';

const NavigationLink = ({ path, text }) => {
  return (
    <Link
      to={path}
      className={
        window.location.pathname === path ? 'activeLink' : 'notActiveLink'
      }>
      {text}
    </Link>
  );
};

export default NavigationLink;
