import React, { Component } from 'react'
import { translateGender, translateCondition } from '../../../Services/TranslateService'
import { Label } from 'react-bootstrap'
import styles from './UserCard.css'

class UserCard extends Component {
  render () {
    const userName = this.props.user.name
    const age = this.props.user.age
    const gender = translateGender( this.props.user.gender )
    const condition = translateCondition( this.props.user.condition )
    return (
      <h1 className={styles.container}>
        <Label className={styles.label} bsStyle="primary"> {userName} </Label>
        <Label className={styles.label} bsStyle="info"> {age} años</Label>
        <Label className={styles.label} bsStyle="info"> {gender} </Label>
        {condition === 'Deshabilitado' &&
        <Label className={styles.label}> Usuario {condition} </Label>}
        {condition === 'Activo' &&
        <Label bsStyle="info" className={styles.label}> Usuario {condition} </Label>}
      </h1>
    )
  }
}

export default UserCard