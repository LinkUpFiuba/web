import React, { Component } from 'react'
import FullNavBar from '../../Components/FullNavBar'
import styles from './ReportsPage.css'
import ComplaintsReport from './ComplaintsReport/ComplaintsReport'
import { loadComplaintsByType } from '../../Services/ReportsService'
import Loading from '../../Components/Loading/Loading'
import { DropdownButton, MenuItem } from 'react-bootstrap'
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

  onReportSelect = key => {
    this.setState({ reportSelected: key, datesSelected: false })
  }

  render () {
    const isComplaintsSelected = this.state.reportSelected === 'complaints' && 'Denuncias'
    const isUsersSelected = this.state.reportSelected === 'users' && 'Usuarios'
    const dropdownTitle = isComplaintsSelected || isUsersSelected || "Elija el tipo"
    return (
      <div>
        <FullNavBar auth={this.props.auth} history={this.props.history}/>
        <div className={styles.body}>
          <div className={styles.title}>
            <h1>Reportes</h1>
            <div className={styles.reportSelector}>
              <DropdownButton title={dropdownTitle} id="reports">
                <MenuItem onSelect={this.onReportSelect} eventKey="complaints">Denuncias</MenuItem>
                <MenuItem onSelect={this.onReportSelect} eventKey="users">Usuarios</MenuItem>
              </DropdownButton>
            </div>
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
