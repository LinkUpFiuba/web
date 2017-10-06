import React, { Component } from 'react'
import { translateGender, translateCondition } from '../../../Services/TranslateService'

class UserCard extends Component{
  render(){
    const userName = this.props.user.name
    const age = this.props.user.age
    const gender = translateGender(this.props.user.gender)
    const condition = translateCondition(this.props.user.condition)
    return (
      <h1>{userName}, {age}, {gender},    Usuario {condition}</h1>
    )
  }
}

export default UserCard