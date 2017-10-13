import React, { Component }  from 'react'
import LoginPage from './Pages/LoginPage/LoginPage'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'
import UsersListPage from './Pages/UsersListPage/UsersListPage'
import ComplaintUserPage from './Pages/ComplaintUserPage/ComplaintUserPage'
import AdsPage from './Pages/AdsPage/AdsPage'
import Cookies from 'universal-cookie';

class App extends Component {


  render(){
    return (
      <Router>
        <div>
          <button onClick={this.handleNameChange}> cookie</button>
          <Route path="/login" render={() => <LoginPage auth={auth}/>}/>
          <PrivateRoute path="/usersList/:userId" componentProps={{ auth: auth }} component={ComplaintUserPage}/>
          <PrivateRoute path="/usersList" componentProps={{ auth: auth }} component={UsersListPage}/>
          <PrivateRoute path="/ads" componentProps={{auth:auth}} component={AdsPage} />
          <PrivateRoute path="//" component={Home}/>
        </div>
      </Router>
    )
  }
}

const Home = () => {
  return <Redirect to={'/usersList'}/>
}

const cookies = new Cookies();

const auth = {
  isAuthenticated: cookies.get( 'isSessionOpen' ) === 'true',
  authenticate( cb ) {
    this.isAuthenticated = true
    cookies.set('isSessionOpen', true, { path: '/' });
  },
  signout( cb ) {
    this.isAuthenticated = false
    cookies.set('isSessionOpen', false, { path: '/' });
    setTimeout( cb, 10 )
  }
}

const PrivateRoute = ( { componentProps: componentProps, component: Component, ...rest } ) => (
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
)

export default App
