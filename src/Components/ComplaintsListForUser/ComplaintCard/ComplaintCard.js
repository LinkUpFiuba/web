import React, { Component } from 'react'
import styles from './ComplaintCard.css'
import { translateGender, translateState } from '../../../Services/TranslateService'
import { Button } from 'react-bootstrap'

class ComplaintCard extends Component {

  translateComplaint ( complaint ) {
    complaint.state = translateState( complaint.state )
    complaint.gender = translateGender( complaint.sex )
  }

  render () {
    const complaint = this.props.complaint
    this.translateComplaint( complaint )
    return (
      <div className={styles.cardBody}>
        <h2>{complaint.state}</h2>
        <h5>Usuario Denunciante: { complaint.userName }</h5>
        <h5>Edad Denunciante: { complaint.age }</h5>
        <h5>Genero Denunciante: { complaint.gender }</h5>
        <div>Mensaje: { complaint.message }</div>
        { complaint.state === 'Pendiente' && <div className={styles.buttons}>
          <Button className={styles.button}>Rechazar</Button>
          <Button className={styles.button}>Aceptar</Button>
        </div> }
      </div>
    )
  }
}

export default ComplaintCard
