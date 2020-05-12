import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from 'components/privateRoute/privateRoute';

import GlobalStyles from 'styles/global';
import uiTheme from 'styles/uiTheme';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

import { UserProvider } from 'components/userProvider/userProvider';
import AuthForm from 'components/authForm/authForm';
import Sidebar from 'components/sidebar/sidebar';
import Dashboard from 'components/dashboard/dashboard';

function App() {
  const theme = createMuiTheme(uiTheme);
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Sidebar />
          <Switch>
            <Route exact path="/auth" render={(props) => <AuthForm {...props} />} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} redirectPath="/auth" />
          </Switch>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default hot(App);
