import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = firebase.auth().currentUser;

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
