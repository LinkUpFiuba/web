import React, { Component } from 'react'
import styles from './LoginPage.css'
import LinkUpLogo from '../../Components/LinkUpLogo'
import LoginForm from '../../Components/LoginForm/LoginForm'

class LoginPage extends Component {
  render () {
    return (
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <LinkUpLogo proportion="200"/>
        </div>
        <div className={styles.title}>
          <h1>Link Up</h1>
        </div>
        <LoginForm auth={this.props.auth}/>
      </div>
    )
  }
}

export default LoginPage
