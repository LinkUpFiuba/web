import React, { Component } from 'react'
import FullNavBar from '../../Components/FullNavBar'
import styles from './usersListPage.css'
import ComplaintsList from './ComplaintsList/ComplaintsList'
import { loadComplaints } from '../../Services/ComplaintsService'
import Loading from '../../Components/Loading/Loading'
import { Button } from 'react-bootstrap'

class UsersListPage extends Component {

  state = {
    complaints: [],
    ready: false,
  }

  componentDidMount = () => {
    loadComplaints()
      .then( complaints => this.setState( { complaints } ) )
      .then( () => this.setState( { ready: true } ) )
  }

  reloadComplaints = () => {
    this.setState( { ready: false } )
    loadComplaints()
      .then( complaints => this.setState( { complaints } ) )
      .then( () => this.setState( { ready: true } ) )
  }

  render () {
    return (
      <div>
        <FullNavBar auth={this.props.auth} history={this.props.history}/>
        <div className={styles.body}>
          <div className={styles.title}>
            <h1>Denuncias</h1>
            <Button className={styles.reloadComplaints} onClick={this.reloadComplaints}>  Recargar </Button>
          </div>
          {!this.state.ready &&
            <Loading message="Cargando usuarios" size="150"/> }
          {this.state.ready &&
          <ComplaintsList complaints={this.state.complaints}/>}
        </div>
      </div>
    )
  }
}

export default UsersListPage
