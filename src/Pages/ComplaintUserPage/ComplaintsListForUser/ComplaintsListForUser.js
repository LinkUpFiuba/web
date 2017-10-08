import React, { Component } from 'react'
import ComplaintCard from './ComplaintCard/ComplaintCard'
import styles from './ComplaintsListForUser.css'

class ComplaintsListForUser extends Component {

  render () {
    this.props.complaints.sort(function(a,b){
      const dateA = new Date(a.timeStamp)
      const dateB = new Date(b.timeStamp)
      return dateB - dateA;
    })
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