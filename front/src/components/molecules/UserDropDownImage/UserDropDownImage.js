import './UserDropDownImage.css';
import React from 'react';
import UserIcon from '../../../assets/photos/User.png';
import { DropDownUserInfo } from '../';
import { BlankScreenToggle } from '../../atoms';

const UserDropDownImage = ({
  picture,
  changeUserInfoDropDownStatus,
  userInfoDropDownStatus,
}) => {
  return (
    <div className='user'>
      <div className='userComponents' onClick={changeUserInfoDropDownStatus}>
        <img className='userPhoto' src={picture ? picture : UserIcon} />
        <div className='arrow-down'></div>
      </div>
      {userInfoDropDownStatus && (
        <>
          <BlankScreenToggle
            changeUserInfoDropDownStatus={changeUserInfoDropDownStatus}
          />
          <DropDownUserInfo />
        </>
      )}
    </div>
  );
};

export default UserDropDownImage;
