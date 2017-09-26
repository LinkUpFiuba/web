import React, { Component } from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import styles from './LoginForm.css';
import { Redirect } from 'react-router-dom';
import ErrorText from '../ErrorText/ErrorText';
import { adminPass, adminUser } from '../../Constants';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
      error: false
    };
  }

  handleUserChange = e => {
    this.setState({ username: e.target.value, error: false });
  };

  handleOnClick = () => {
    if (
      this.state.username === adminUser &&
      this.state.password === adminPass
    ) {
      this.setState({ redirectToReferrer: true });
    }
    this.setState({ error: true });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value, error: false });
  };

  render() {
    const redirectToReferrer = this.state.redirectToReferrer;
    if (redirectToReferrer) {
      this.props.auth.authenticate();
      return <Redirect to={'/usersList'} />;
    }

    return (
      <div className={styles.form}>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Usuario</ControlLabel>
          <FormControl
            type="text"
            value={this.state.username}
            placeholder="Ingresar usuario"
            onChange={this.handleUserChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Contraseña</ControlLabel>
          <FormControl
            type="password"
            value={this.state.password}
            placeholder="Ingresar contraseña"
            onChange={this.handlePasswordChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <div className={styles.button}>
          <Button onClick={this.handleOnClick} title="Ingresar">
            Ingresar
          </Button>
          {this.state.error && (
            <ErrorText text="La combinacion de usuarios/contraseña es incorrecta" />
          )}
        </div>
      </div>
    );
  }
}

export default LoginForm;
