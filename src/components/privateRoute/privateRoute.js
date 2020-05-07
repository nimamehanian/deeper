import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from 'components/userProvider/userProvider';

function PrivateRoute({ component: Component, redirectPath, redirectComponentProps, ...rest }) {
  const { currentUser } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => currentUser ?
        <Component {...props} /> :
        <Redirect to={{ pathname: redirectPath, state: redirectComponentProps }} />
      }
    />
  );
}

PrivateRoute.propTypes = {
  redirectPath: PropTypes.string.isRequired,
  redirectComponentProps: PropTypes.object,
};

export default PrivateRoute;
