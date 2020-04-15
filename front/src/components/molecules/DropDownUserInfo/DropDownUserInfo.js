import React from 'react';
import './DropDownUserInfo.css';
import { DropDownLink } from '../../atoms';

const DropDownUserInfo = ({ userLoggedInStatus, userDisplayName }) => {
  return (
    <div className='wrapper'>
      <div className='triangle-up'></div>
      <>
        {userLoggedInStatus ? (
          <div>
            <span className='infoText'>Singed in as </span>
            <strong className='userName'>{userDisplayName}</strong>
            <div className='line' />
            <DropDownLink text='Your details' />
            <div className='line' />
            <button className='logout'>Logout</button>
          </div>
        ) : (
          <>not logged in</>
        )}
      </>
    </div>
  );
};

export default DropDownUserInfo;
