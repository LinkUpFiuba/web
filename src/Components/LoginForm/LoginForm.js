import React, { Component } from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import styles from './LoginForm.css';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false
    };
  }

  handleUserChange = e => {
    this.setState({ username: e.target.value });
  };

  handleOnClick = () => {
    this.setState({ redirectToReferrer: true });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
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
        </div>
      </div>
    );
  }
}

export default LoginForm;
