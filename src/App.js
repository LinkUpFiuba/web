import React, { Component } from 'react';
import LoginPage from './Pages/LoginPage/LoginPage';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import UsersListPage from './Pages/UsersListPage/UsersListPage';
import ComplaintUserPage from './Pages/ComplaintUserPage/ComplaintUserPage'

const App = () => (
  <Router>
    <div>
      <Route path="/login" render={() => <LoginPage auth={auth} />} />
      <PrivateRoute path="/usersList/:userId" componentProps={{auth:auth}} component={ComplaintUserPage} />
      <PrivateRoute path="/usersList" componentProps={{auth:auth}} component={UsersListPage} />
      <PrivateRoute path="//" component={Home} />
    </div>
  </Router>
);

const Home = () => {
  return <Redirect to={'/usersList'} />;
};

const auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 10);
  }
};


const PrivateRoute = ({ componentProps: componentProps, component: Component, ...rest }) => (
  <Route exact
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
