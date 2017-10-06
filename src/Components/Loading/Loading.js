import React, { Component } from 'react'
import ReactLoading from 'react-loading'
import styles from './Loading.css'

class Loading extends Component {
  render () {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}>
          <ReactLoading type="spin" color="#E00051" width={this.props.size} height={this.props.size}/>
        </div>
        <h2>{this.props.message}</h2>
      </div>
    )
  }
}

export default Loading
