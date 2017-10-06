import React, { Component } from 'react'
import FullNavBar from '../../Components/FullNavBar'
import ComplaintsListForUser from './ComplaintsListForUser/ComplaintsListForUser'
import styles from './ComplaintUserPage.css'
import { disableUser, enableUser, loadComplaintsForUser } from '../../Services/ComplaintsService'
import UserCard from './UserCard/UserCard'
import { Link } from 'react-router-dom'

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
    enableUser(this.props.match.params.userId )
      this.setState( { ready: false } )
      this.componentDidMount()
  }

  handleDisenableUser = () => {
    disableUser(this.props.match.params.userId )
    this.setState( { ready: false } )
    this.componentDidMount()
  }



  render () {
    return (
      <div>
        <FullNavBar auth={this.props.auth} history={this.props.history}/>
        <div className={styles.body}>
          <div className={styles.title}>
            <Link to='/usersList'>
              <h2 className={styles.back}>
                ⟵Volver
              </h2>
            </Link>
            {this.state.ready && <UserCard user={this.state.actualUser}/> }
            <div className={styles.button}>
            {this.state.ready && this.state.actualUser.condition === 'Disabled' &&
              <button onClick={this.handleEnableUser}>
                Habilitar Usuario
              </button>}
              {this.state.ready && this.state.actualUser.condition === 'Active' &&
              <button onClick={this.handleDisenableUser}>
                Deshabilitar Usuario
              </button>}
            </div>
          </div>
          {this.state.ready && <ComplaintsListForUser reject={this.reject} complaints={this.state.complaints}/>}
        </div>
      </div>
    )
  }
}

export default ComplaintUserPage