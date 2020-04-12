import React from 'react';
import './UserDropDown.css';
import UserIcon from '../../../assets/photos/User.png';

const UserDropdown = () => {
  return (
    <div className='user'>
      <div className='userComponents'>
        <img
          className='userPhoto'
          src={
            JSON.parse(localStorage.getItem('userData'))
              ? JSON.parse(localStorage.getItem('userData')).picture
              : UserIcon
          }
        />
        <div className='arrow-down'></div>
      </div>
    </div>
  );
};

export default UserDropdown;
