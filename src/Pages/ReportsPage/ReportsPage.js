import React, { Component } from 'react'
import FullNavBar from '../../Components/FullNavBar'
import styles from './ReportsPage.css'
import ComplaintsReport from './ComplaintsReport/ComplaintsReport'
import { loadComplaintsByType } from '../../Services/ReportsService'
import Loading from '../../Components/Loading/Loading'
import { Button } from 'react-bootstrap'
import DatePickers from './DatePicker/DatePickers'

class ReportsPage extends Component {

  state = {
    reportSelected: '',
    complaintsByType: {},
    ready: true,
    datesSelected: false,
  }

  onDatesSelected = (startDate, endDate) => {
    this.setState( { ready: false } )
    if (this.state.reportSelected === 'complaints') {
      loadComplaintsByType(startDate, endDate)
        .then(complaintsByType => this.setState({ complaintsByType }))
        .then(() => this.setState({ ready: true, datesSelected: true }))
    } else {
      // Load the other report data
      this.setState({ ready: true, datesSelected: true })
    }
  }

  onComplaintsReportClick = () => {
    this.setState( { reportSelected: 'complaints' } )
  }

  render () {
    return (
      <div>
        <FullNavBar auth={this.props.auth} history={this.props.history}/>
        <div className={styles.body}>
          <div className={styles.title}>
            <h1>Reportes</h1>
            <Button className={styles.reportButtons} onClick={this.onComplaintsReportClick}>Denuncias</Button>
            {/* TODO: Cambiar cuando se haga el reporte de usuarios */}
            <Button className={styles.reportButtons} onClick={this.onComplaintsReportClick}>Usuarios</Button>
          </div>
          {this.state.reportSelected && <DatePickers onNewDate={this.onDatesSelected}/>}
          {!this.state.ready &&
          <Loading message="Cargando datos" size={150}/> }
          {this.state.ready && this.state.datesSelected && this.state.reportSelected === 'complaints' &&
          <ComplaintsReport complaintsByType={this.state.complaintsByType} />}
        </div>
      </div>
    )
  }
}

export default ReportsPage
