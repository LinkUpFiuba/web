import React, { Component } from 'react';
import LoginPage from './Pages/LoginPage/LoginPage';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import UsersListPage from './Pages/UsersListPage/UsersListPage';

const App = () => (
  <Router>
    <div>
      <Route path="/login" render={() => <LoginPage auth={auth} />} />
      <PrivateRoute path="/usersList"  componentProps={{auth:auth}} component={UsersListPage} />
      <PrivateRoute path="//" component={Home} />
    </div>
  </Router>
);

const Home = () => {
  console.log('home');
  return <Redirect to={'/usersList'} />;
};

const auth = {
    //CAMBIAR
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true;
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 10);
  }
};


const PrivateRoute = ({componentProps: componentProps, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated ? (
        <Component {...componentProps} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )}
  />
);

export default App;
