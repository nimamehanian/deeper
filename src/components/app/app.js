import { hot } from 'react-hot-loader/root';
import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from 'styles/global';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
// import AuthForm from 'components/authForm/authForm';
import { $sunset } from 'styles/colors';

const Header = styled.div`
  color: #fff;
  background: ${$sunset};
  height: 60px;
  font-size: 30px;
  font-family: 'Andes Reg';
  line-height: 2;
  padding: 0px 0px 0px 8px;
`;

function App() {
  const theme = createMuiTheme({
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
  });

  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header>Title</Header>
        {/* <Switch> */}
        {/* <Route exact path="/" render={(props) => <AuthForm primaryColor={$olive} {...props} />} /> */}
        {/* <Route exact path="/pathB" component={ComponentB} /> */}
        {/* </Switch> */}
        {/* <Footer /> */}
      </ThemeProvider>
    </div>
  );
}

export default hot(App);
