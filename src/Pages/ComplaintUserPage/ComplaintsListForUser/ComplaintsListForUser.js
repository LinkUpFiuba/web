import React, { Component } from 'react'
import ComplaintCard from './ComplaintCard/ComplaintCard'
import styles from './ComplaintsListForUser.css'

class ComplaintsListForUser extends Component {

  render () {
    const allComplaints = this.props.complaints.sort(function(a,b){
      const dateA = new Date(a.timeStamp.replace(/-/g, "/"))
      const dateB = new Date(b.timeStamp.replace(/-/g, "/"))
      return dateB - dateA;
    }).map(complaint =>
      <ComplaintCard key={complaint.complaintId} reject={this.props.reject} complaint={complaint}/>
    );

    return (
      <div className={styles.board}>
        {allComplaints}
      </div>
    )
  }
}

export default ComplaintsListForUser