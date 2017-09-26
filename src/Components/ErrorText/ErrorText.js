import React, { Component } from 'react';
import styles from './ErrorText.css';

class ErrorText extends Component {
  render() {
    return <div className={styles.text}>{this.props.text}</div>;
  }
}

export default ErrorText;
