import React from 'react';
import './DropDownUserInfo.css';
import { DropDownLink } from '../../atoms';

const DropDownUserInfo = ({ history, authModel }) => {
  console.log('history', history);
  const logoutUser = () => {
    authModel.logout();
    localStorage.removeItem('userData');
    document.cookie = '';
    history.push('/login');
  };

  return (
    <div className='wrapper'>
      <div className='triangle-up'></div>
      <>
        {false ? (
          <div>
            <span className='infoText'>Singed in as </span>
            <strong className='userName'>{authModel.user.displayName}</strong>
            <div className='line' />
            <DropDownLink text='Your details' />
            <div className='line' />
            <button onClick={logoutUser} className='logout'>
              Logout
            </button>
          </div>
        ) : (
          <span className='infoText'>Sign In </span>
        )}
      </>
    </div>
  );
};

export default DropDownUserInfo;
