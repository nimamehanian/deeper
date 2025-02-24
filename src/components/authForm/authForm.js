import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import firebase from 'FB';
import { UserContext } from 'components/userProvider/userProvider';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';
import { easeInOutQuint } from 'styles/mixins';
import { $background, $charcoal, $pussy, $GOLDEN_RATIO_MICRO } from 'styles/colors';
import { transition } from 'styles/mixins';
import includes from 'lodash/includes';

import Button from 'components/button/button';

import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { InputAdornment, IconButton } from '@material-ui/core';

const AuthFormWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Header = styled.div`
  color: ${$charcoal};
  background: ${$background};
  height: 60px;
  font-size: 30px;
  font-family: 'Canela Med';
  line-height: 2;
  letter-spacing: ${$GOLDEN_RATIO_MICRO}px;
  padding: 0px 8px;

  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
`;

const FieldWrapper = styled.div`
  position: relative;
  padding-top: 48px;
  display: flex;
  flex-direction: column;
  width: 343px;
  span {
    margin: 16px 0px;
  }
`;

const Title = styled.div`
  font-family: 'Canela Med';
  font-size: 32px;
  margin: 0px 0px 16px;
  position: absolute;
  top: 0px;
  left: 0px;
  will-change: opacity;
`;

const Field = styled.div`
  transform: ${({ isVisible }) => `translate3d(0, ${isVisible ? 0 : -8}px, 0)`};
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  height: ${({ isVisible }) => isVisible ? '48px' : '0px'};
  margin-bottom: ${({ isVisible }) => isVisible ? '4px' : '0px'};
  z-index: ${({ isVisible }) => isVisible ? 1 : -1};
  ${transition}
`;

const ForgotPw = styled.div`
  text-align: right;
  font-size: 14px;
  font-family: 'Andes Reg';
  color: ${$pussy};
  cursor: pointer;
  transform: ${({ isVisible }) => `translate3d(0, ${isVisible ? 0 : -8}px, 0)`};
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  height: ${({ isVisible }) => isVisible ? '17px' : '0px'};
  z-index: ${({ isVisible }) => isVisible ? 1 : -1};
  ${transition}
  &:hover {
    @media (pointer: fine) {
      color: ${$charcoal}
    }
  }
`;

const AuthMode = styled.div`
  text-align: center;
  font-size: 14px;
  span {
    color: ${$pussy};
    cursor: pointer;
    margin-left: 4px;
    ${transition}
    &:hover {
      @media (pointer: fine) {
        color: ${$charcoal}
      }
    }
  }
`;

function AuthForm({ authMode, history }) {
  const { currentUser } = useContext(UserContext);
  // options: 'signin', 'signup', 'resetpw'
  const [{ mode }, setMode] = useState(authMode);
  const [{ isPasswordVisible }, setIsPasswordVisible] = useState({ isPasswordVisible: false });
  const [{ email }, setEmail] = useState({ email: '' });
  const [{ password }, setPassword] = useState({ password: '' });

  async function handleSubmit() {
    switch (mode) {
      case 'signin':
        try {
          await firebase.signIn(email, password);
          history.push('/dashboard');
          return;
        } catch ({ code, message }) {
          console.error(code, message);
        }
      case 'signup':
        return console.log('SIGNING UP...');
      case 'resetpw':
        return console.log('RESETTING PASSWORD...');
      default:
        return console.log('HUH?');
    }
  }

  const titles = {
    signin: 'Sign in to your account',
    signup: 'Create your account',
    resetpw: 'Reset your password',
  };

  const transitions = useTransition(titles[mode], title => title, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 400, easing: easeInOutQuint },
  });

  return (
    currentUser ? <Redirect to='/dashboard' /> :
      <AuthFormWrapper>
        <Header>
          Deeper
        </Header>
        <FieldWrapper>
          {transitions.map(({ item, key, props }) => {
            return (
              <animated.div key={key} style={{ ...props }}>
                <Title>{item}</Title>
              </animated.div>
            );
          })}

          <Field isVisible>
            <TextField
              type="email"
              name="email"
              label="Email"
              value={email}
              fullWidth
              onChange={({ target: { value: email } }) => setEmail({ email })}
            />
          </Field>

          <Field isVisible={mode !== 'resetpw'}>
            <TextField
              type={isPasswordVisible ? 'passwordtext' : 'password'}
              name="password"
              label="Password"
              value={password}
              fullWidth
              onChange={({ target: { value: password } }) => setPassword({ password })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="toggle password visibility"
                      style={{ background: 'none' }}
                      onClick={() => setIsPasswordVisible({ isPasswordVisible: !isPasswordVisible })}
                    >
                      {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Field>

          <ForgotPw
            isVisible={mode === 'signin'}
            onClick={() => setMode({ mode: 'resetpw' })}
          >
            {'Forgot your password?'}
          </ForgotPw>

          <span>
            <Button
              isDisabled={
                // mode !== 'signin' ||
                email.length < 6 ||
                !includes(email, '@') ||
                !includes(email, '.') ||
                password.length < 8
              }
              onClickHandler={() => handleSubmit()}
            />
          </span>

          <AuthMode>
            {mode === 'signin' || mode === 'resetpw' ? 'Don\'t have an account?' : 'Have an account?'}
            <span onClick={() => setMode(mode === 'signin' || mode === 'resetpw' ? { mode: 'signup' } : { mode: 'signin' })}>
              {mode === 'signin' || mode === 'resetpw' ? 'Sign up' : 'Sign in'}
            </span>
          </AuthMode>

        </FieldWrapper>
      </AuthFormWrapper>
  );
}

AuthForm.defaultProps = {
  authMode: { mode: 'signin' },
};

AuthForm.propTypes = {
  authMode: PropTypes.shape({
    mode: PropTypes.oneOf(['signin', 'signup', 'resetpw']),
  }),
};

export default AuthForm;
