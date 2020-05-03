import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from 'styles/global';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import AuthForm from 'components/authForm/authForm';
import { $sunset, $pussy, $charcoal, $GOLDEN_RATIO_MICRO } from 'styles/colors';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: $pussy,
      },
      text: {
        primary: $charcoal,
      }
    },
    typography: {
      fontFamily: 'Andes Reg',
    },
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
  });

  // <Header>
  //   <Link to="/">Deeper</Link>
  //   <Link to="/auth">sign in</Link>
  // </Header>

  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/auth" render={(props) => <AuthForm {...props} />} />
          {/* <Route exact path="/pathB" component={ComponentB} /> */}
        </Switch>
        {/* <Footer /> */}
      </ThemeProvider>
    </div>
  );
}

export default hot(App);
