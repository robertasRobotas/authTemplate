import React from 'react';
import { FacebookLoginButton } from 'react-social-login-buttons';

const FacebookButton = () => {
  return (
    <a className='link' href='http://localhost:8085/facebook/auth'>
      <div className='buttonWrapper'>
        <FacebookLoginButton />
      </div>
    </a>
  );
};

export default FacebookButton;
