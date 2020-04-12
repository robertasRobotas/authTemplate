import React from 'react';
import './UserDropDown.css';
import UserIcon from '../../../assets/photos/User.png';

const UserDropdown = () => {
  console.log(JSON.parse(localStorage.getItem('userData')));

  return (
    <div className='user'>
      <img
        className='userPhoto'
        src={
          JSON.parse(localStorage.getItem('userData'))
            ? JSON.parse(localStorage.getItem('userData')).picture
            : UserIcon
        }
      />
    </div>
  );
};

export default UserDropdown;
