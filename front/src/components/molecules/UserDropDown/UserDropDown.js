import React from 'react';
import './UserDropDown.css';
import UserIcon from '../../../assets/photos/User.png';

const UserDropdown = ({ picture }) => {
  console.log(picture);
  return (
    <div className='user'>
      <div className='userComponents'>
        <img className='userPhoto' src={picture ? picture : UserIcon} />
        <div className='arrow-down'></div>
      </div>
    </div>
  );
};

export default UserDropdown;
