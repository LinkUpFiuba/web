import React, { Component } from 'react'
import FullNavBar from '../../Components/FullNavBar'
import styles from './ReportsPage.css'
import ComplaintsReport from './ComplaintsReport/ComplaintsReport'
import { loadComplaintsByType } from '../../Services/ReportsService'
import Loading from '../../Components/Loading/Loading'
import { Button } from 'react-bootstrap'

class UsersListPage extends Component {

  state = {
    complaintsReport: false,
    complaintsByType: {},
    ready: true
  }

  onComplaintsReportClick = () => {
    this.setState( { ready: false, complaintsReport: true } )
    loadComplaintsByType()
      .then( complaintsByType => this.setState( { complaintsByType } ) )
      .then( () => this.setState( { ready: true } ) )
  }

  render () {
    return (
      <div>
        <FullNavBar auth={this.props.auth} history={this.props.history}/>
        <div className={styles.body}>
          <div className={styles.title}>
            <h1>Reportes</h1>
            <Button className={styles.reloadComplaints} onClick={this.onComplaintsReportClick}>Denuncias</Button>
            {/* TODO: Cambiar cuando se haga el reporte de usuarios */}
            <Button className={styles.reloadComplaints} onClick={this.onComplaintsReportClick}>Usuarios</Button>
          </div>
          {!this.state.ready &&
          <Loading message="Cargando datos" size={150}/> }
          {this.state.ready && this.state.complaintsReport &&
          <ComplaintsReport complaintsByType={this.state.complaintsByType} />}
        </div>
      </div>
    )
  }
}

export default UsersListPage
