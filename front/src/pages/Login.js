import React from 'react';
import axios from 'axios';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';

function Login() {
  const apiCall = () => {
    axios
      .get('http://localhost:8085/user/redirect', { withCredentials: true })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className='App'>
      <a href='http://localhost:8085/google/auth'>
        <GoogleLoginButton />
      </a>

      <a href='http://localhost:8085/facebook/auth'>
        <FacebookLoginButton />
      </a>
      <div id='my-signin2'></div>
    </div>
  );
}

export default Login;
