import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { $charcoal, $pussy } from 'styles/colors';

import Button from 'components/button/button';

import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { InputAdornment, IconButton } from '@material-ui/core';

const AuthFormWrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 343px;
  & > div {
    margin: 4px 0px;
  }
  span {
    margin: 16px 0px;
  }
`;

const Title = styled.div`
  font-family: 'Canela Med';
  font-size: 32px;
`;

const ForgotPw = styled.div`
  text-align: right;
  font-size: 14px;
  font-family: 'Andes Reg';
  color: ${$pussy};
  cursor: pointer;
  transition: all 555ms cubic-bezier(0.165, 0.840, 0.000, 1.115);
  &:hover {
    color: ${$charcoal}
  }
`;

const AuthMode = styled.div`
  text-align: center;
  font-size: 14px;
  span {
    color: ${$pussy};
    cursor: pointer;
    margin-left: 4px;
    transition: all 555ms cubic-bezier(0.165, 0.840, 0.000, 1.115);
    &:hover {
      color: ${$charcoal}
    }
  }
`;

function AuthForm() {
  // options: 'signin', 'signup', 'resetpw'
  const [mode, setMode] = useState('signin');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const title = {
    signin: 'Sign in to your account',
    signup: 'Create your account',
    resetpw: 'Reset your password',
  };

  return (
    <AuthFormWrapper>
      <FieldWrapper>
        <Title>{title[mode]}</Title>
        <TextField
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        {mode !== 'resetpw' && <TextField
          type={isPasswordVisible ? 'passwordtext' : 'password'}
          name="password"
          label="Password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label="toggle password visibility"
                  style={{ background: 'none' }}
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />}
        {mode === 'signin' && <ForgotPw onClick={() => setMode('resetpw')}>Forgot your password?</ForgotPw>}
        <span>
          <Button
            isDisabled={mode !== 'signin'}
            onClickHandler={() => console.log('SIGNING IN...')}
          />
        </span>
        <AuthMode>
          {mode === 'signin' || mode === 'resetpw' ? 'Don\'t have an account?' : 'Have an account?'}
          <span onClick={() => setMode(mode === 'signin' || mode === 'resetpw' ? 'signup' : 'signin')}>
            {mode === 'signin' || mode === 'resetpw' ? 'Sign up' : 'Sign in'}
          </span>
        </AuthMode>
      </FieldWrapper>
    </AuthFormWrapper>
  );
}

export default AuthForm;
