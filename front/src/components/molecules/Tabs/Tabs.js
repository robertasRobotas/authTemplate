import React from 'react';
import { NavigationLink } from '../../atoms';
import './Tabs.css';

const NavBarTabs = ({ navLinks, menuStatus, userPicture }) => {
  return (
    <ul className={menuStatus ? 'open' : 'closed'}>
      <div className='ResponsiveLinks'>
        {navLinks.map((link, i) => (
          <NavigationLink key={i} path={link.path} text={link.text} />
        ))}
        <div className='additionalLinkWrapper'>
          <NavigationLink
            key={'profile'}
            path={'/user'}
            text={'Your details'}
            userPicture={userPicture}
          />
        </div>
        <div className='additionalLinkWrapper'>
          <NavigationLink key={'logout'} path={'/logout'} text={'Logout'} />
        </div>
      </div>
    </ul>
  );
};

export default NavBarTabs;
