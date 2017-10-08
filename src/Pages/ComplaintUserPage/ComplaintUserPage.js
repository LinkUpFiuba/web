import React, { Component } from 'react'
import FullNavBar from '../../Components/FullNavBar'
import ComplaintsListForUser from './ComplaintsListForUser/ComplaintsListForUser'
import styles from './ComplaintUserPage.css'
import { disableUser, enableUser, loadComplaintsForUser } from '../../Services/ComplaintsService'
import UserCard from './UserCard/UserCard'
import { Link } from 'react-router-dom'
import Loading from '../../Components/Loading/Loading'
import { Button } from 'react-bootstrap'

class ComplaintUserPage extends Component {

  state = {
    actualUser: {},
    complaints: [],
    ready: false,
  }

  componentDidMount = () => {
    loadComplaintsForUser( this.props.match.params.userId )
      .then( response => this.setState( { complaints: response.complaints, actualUser: response.user } ) )
      .then( () => this.setState( { ready: true } ) )
  }

  handleEnableUser = () => {
    this.setState( { ready: false } )
    enableUser( this.props.match.params.userId ).then( () => {
      this.componentDidMount()
    } )
  }

  handleDisableUser = () => {
    this.setState( { ready: false } )
    disableUser( this.props.match.params.userId ).then( () => {
      this.componentDidMount()
    })
  }

  render () {
    return (
      <div>
        <FullNavBar auth={this.props.auth} history={this.props.history}/>
        <div className={styles.body}>
          {!this.state.ready &&
          <Loading message="Cargando usuario" size={150}/> }
          <div className={styles.title}>
            {this.state.ready &&
            <Link to='/usersList'>
              <h2 className={styles.back}>
                Lista de Usuarios /
              </h2>
            </Link> }
            {this.state.ready &&
            <UserCard user={this.state.actualUser}/> }
            <div className={styles.button}>
              {console.log( this.state.actualUser.condition )}
              {this.state.ready && this.state.actualUser.condition === 'Disabled' &&
              <Button bsStyle="success" bsSize="large" onClick={this.handleEnableUser}>
                Habilitar Usuario
              </Button>}
              {this.state.ready && this.state.actualUser.condition === 'Active' &&
              <Button bsStyle="danger" bsSize="large" onClick={this.handleDisableUser}>
                Deshabilitar Usuario
              </Button>}
            </div>
          </div>
          {this.state.ready && <ComplaintsListForUser reject={this.reject} complaints={this.state.complaints}/>}
        </div>
      </div>
    )
  }
}

export default ComplaintUserPage