import React from 'react';
import './DropDownUserInfo.css';
import UserIcon from '../../../assets/photos/User.png';

const DropDownUserInfo = ({ picture }) => {
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

export default DropDownUserInfo;
