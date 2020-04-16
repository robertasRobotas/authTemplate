import React from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';

const GoogleButton = () => {
  return (
    <a className='link' href='http://localhost:8085/google/auth'>
      <div className='buttonWrapper'>
        <GoogleLoginButton />
      </div>
    </a>
  );
};

export default GoogleButton;
