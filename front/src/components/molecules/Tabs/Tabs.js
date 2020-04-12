import React from 'react';
import { Link } from '../../atoms';
import './Tabs.css';

const NavBarTabs = ({ navLinks, menuStatus }) => {
  return (
    <ul className={menuStatus ? 'open' : 'closed'}>
      <div className='ResponsiveLinks'>
        {navLinks.map((link, i) => (
          <Link key={i} path={link.path} text={link.text} />
        ))}
      </div>
    </ul>
  );
};

export default NavBarTabs;
