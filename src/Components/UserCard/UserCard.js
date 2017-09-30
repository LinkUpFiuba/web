import React, { Component } from 'react'
import { translateGender } from '../../Services/TranslateService'

class UserCard extends Component{
  render(){
    const userName = this.props.user.name
    const age = this.props.user.age
    const gender = translateGender(this.props.user.gender)
    return (
      <h1>{userName}, {age}, {gender}</h1>
    )
  }
}

export default UserCard