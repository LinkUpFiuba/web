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
      <AuthButton />
      <Route path="/login" render={() => <LoginPage auth={auth} />} />
      <PrivateRoute path="/usersList" component={UsersListPage} />
      <PrivateRoute path="//" component={Home} />
    </div>
  </Router>
);

const Home = () => {
  console.log('home');
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

// It will be deleted in the next commit
const AuthButton = withRouter(
  ({ history }) =>
    auth.isAuthenticated ? (
      <p>
        Welcome!
        <button
          onClick={() => {
            auth.signout(() => history.push('/'));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <div />
    )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated ? (
        <Component {...props} />
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
