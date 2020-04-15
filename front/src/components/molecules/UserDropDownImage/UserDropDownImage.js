import './UserDropDownImage.css';
import React from 'react';
import UserIcon from '../../../assets/photos/User.png';
import { DropDownUserInfo } from '../';
import { BlankScreenToggle } from '../../atoms';

const UserDropDownImage = ({
  userPicture,
  userDisplayName,
  userLoggedInStatus,
  changeUserInfoDropDownStatus,
  userInfoDropDownStatus,
}) => {
  return (
    <div className='user'>
      <div className='userComponents' onClick={changeUserInfoDropDownStatus}>
        <img
          alt='userPhoto'
          className='userPhoto'
          src={userPicture ? userPicture : UserIcon}
        />
        <div className='arrow-down'></div>
      </div>
      {userInfoDropDownStatus && (
        <>
          <BlankScreenToggle
            changeUserInfoDropDownStatus={changeUserInfoDropDownStatus}
          />
          <DropDownUserInfo
            userDisplayName={userDisplayName}
            userLoggedInStatus={userLoggedInStatus}
          />
        </>
      )}
    </div>
  );
};

export default UserDropDownImage;
