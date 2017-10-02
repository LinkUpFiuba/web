import React, { Component } from 'react'
import ComplaintCard from './ComplaintCard/ComplaintCard'
import styles from './ComplaintsListForUser.css'

class ComplaintsListForUser extends Component {

  render () {

    const allComplaints = this.props.complaints.map(complaint =>
      <ComplaintCard reject={this.props.reject} complaint={complaint}/>
    );

    return (
      <div className={styles.board}>
        {allComplaints}
      </div>
    )
  }
}

export default ComplaintsListForUser