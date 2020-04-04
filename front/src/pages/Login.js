import React from 'react';
import axios from 'axios';
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';
import styled from 'styled-components';

function Login() {
  const style = { textDecoration: 'none', textAlign: 'center', width: '10px' };

  const ButtonWrapper = styled.div`
    margin-top: 10em;
    text-align: center;
  `;

  const Form = styled.div`
    position: relative;
    width: 50%;
    left: 50%;
    transform: translateX(-50%);
  `;

  return (
    <Form>
      <a style={style} href='http://localhost:8085/google/auth'>
        <ButtonWrapper>
          <GoogleLoginButton />
        </ButtonWrapper>
      </a>

      <a style={style} href='http://localhost:8085/facebook/auth'>
        <ButtonWrapper>
          <FacebookLoginButton />
        </ButtonWrapper>
      </a>
    </Form>
  );
}

export default Login;
