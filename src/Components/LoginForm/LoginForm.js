import React, {Component} from 'react'
import {Button, ControlLabel, FormControl, FormGroup} from "react-bootstrap";
import styles from './LoginForm.css'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUserChange = (e) => {
        this.setState({username: e.target.value});
    };

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    };

    render() {
        return (
            <div className={styles.form}>
                <FormGroup
                    controlId="formBasicText"
                >
                    <ControlLabel>Usuario</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.username}
                        placeholder="Ingresar usuario"
                        onChange={this.handleUserChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                    controlId="formBasicText"
                >
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
                    <Button
                        onClick={() => console.log(this.state.username + " " + this.state.password)}
                        title="Ingresar">
                        Ingresar
                    </Button>
                </div>
            </div>
        )
    }
}

export default LoginForm