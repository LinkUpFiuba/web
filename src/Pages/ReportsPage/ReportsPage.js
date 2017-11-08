import React, { Component } from 'react'
import FullNavBar from '../../Components/FullNavBar'
import styles from './ReportsPage.css'
import ComplaintsReport from './ComplaintsReport/ComplaintsReport'
import { loadComplaintsByType } from '../../Services/ReportsService'
import Loading from '../../Components/Loading/Loading'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import DatePickers from './DatePicker/DatePickers'
import UsersReport from "./UsersReport/UsersReport"

class ReportsPage extends Component {

  state = {
    reportSelected: '',
    complaintsByType: {},
    users: {},
    ready: true
  }

  onDatesSelected = (startDate, endDate) => {
    this.setState({ ready: false })
    if (this.state.reportSelected === 'complaints') {
      loadComplaintsByType(startDate, endDate)
        .then(complaintsByType => this.setState({ complaintsByType }))
        .then(() => this.setState({ ready: true }))
    } else if (this.state.reportSelected === 'users') {
      // Load the other report data
      const usersData = {
        '2017-05': {
          users: 1,
          premiumUsers: 0
        },
        '2017-06': {
          users: 3,
          premiumUsers: 1
        },
        '2017-07': {
          users: 5,
          premiumUsers: 2
        },
        '2017-08': {
          users: 4,
          premiumUsers: 3
        },
        '2017-09': {
          users: 10,
          premiumUsers: 7
        },
      }
      this.setState({ ready: true, users: usersData })
    }
  }

  onReportSelect = key => {
    // This is to ensure that DatePickers will re-mount for every report selection.
    // If I leave only the callback, the first time when changing the first time it won't load data.
    // The only drawback with this is that when you change between reports, it restart the dates.
    this.setState({ reportSelected: '', ready: false }, () => {
      this.setState({ reportSelected: key })
    })
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
          {this.state.ready && this.state.reportSelected === 'complaints' &&
          <ComplaintsReport complaintsByType={this.state.complaintsByType} />}
          {this.state.ready && this.state.reportSelected === 'users' &&
          <UsersReport usersData={this.state.users} />}
        </div>
      </div>
    )
  }
}

export default ReportsPage
