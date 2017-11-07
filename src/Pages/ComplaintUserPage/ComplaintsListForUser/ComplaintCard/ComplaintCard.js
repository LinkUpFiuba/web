import React, { Component } from 'react'
import styles from './ComplaintCard.css'
import { translateGender, translateState, translateComplaintType } from '../../../../Services/TranslateService'

class ComplaintCard extends Component {

  handleOnClickReject = () => {
    this.props.reject( this.props.complaint.complaintId )
  }

  translateComplaint ( complaint ) {
    complaint.state = translateState( complaint.state )
    complaint.gender = translateGender( complaint.sex )
    complaint.type = translateComplaintType( complaint.type )
  }

  render () {
    const complaint = this.props.complaint
    this.translateComplaint( complaint )
    return (
      <div className={styles.cardBody}>
        <h2>{complaint.state}</h2>
        <h5>Tipo: {complaint.type}</h5>
        <h5>Usuario denunciante: { complaint.userName }</h5>
        <h5>Edad: { complaint.age }</h5>
        <h5>Género: { complaint.gender }</h5>
        <h5>Fecha: { complaint.timeStamp }</h5>
        <h5>Mensaje:</h5>
        <div> { complaint.message }</div>
      </div>
    )
  }
}

export default ComplaintCard
