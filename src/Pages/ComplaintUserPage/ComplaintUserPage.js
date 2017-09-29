import React, { Component } from 'react'
import FullNavBar from '../../Components/FullNavBar'
import ComplaintsListForUser from '../../Components/ComplaintsListForUser/ComplaintsListForUser'
import styles from './ComplaintUserPage.css'

class ComplaintUserPage extends Component {
  render () {

    const userId = this.props.match.params.userId
    return (
      <div>
        <FullNavBar auth={this.props.auth} history={this.props.history}/>
        <div className={styles.body}>
          <h1>Denuncias para usuario {userId}</h1>
          <ComplaintsListForUser/>
        </div>
      </div>
    )
  }
}

export default ComplaintUserPage