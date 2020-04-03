import React from 'react';
import axios from 'axios';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';

function Login() {
  const style = { textDecoration: 'none' };
  return (
    <>
      <a style={style} href='http://localhost:8085/google/auth'>
        <GoogleLoginButton />
      </a>

      <a style={style} href='http://localhost:8085/facebook/auth'>
        <FacebookLoginButton />
      </a>
    </>
  );
}

export default Login;
