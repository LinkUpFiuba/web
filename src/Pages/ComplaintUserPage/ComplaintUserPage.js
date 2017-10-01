import React, { Component } from 'react'
import FullNavBar from '../../Components/FullNavBar'
import ComplaintsListForUser from '../../Components/ComplaintsListForUser/ComplaintsListForUser'
import styles from './ComplaintUserPage.css'
import { loadComplaintsForUser, rejectComplaint } from '../../Services/ComplaintsService'
import UserCard from '../../Components/UserCard/UserCard'
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

  reject = ( complaintId ) => {
    rejectComplaint( this.state.actualUser.Uid, complaintId )
    this.setState( { ready: false } )
    this.componentDidMount()
  }

  render () {
    const userId = this.props.match.params.userId
    return (
      <div>
        <FullNavBar auth={this.props.auth} history={this.props.history}/>
        <div className={styles.body}>
          <div className={styles.title}>
            <h2 className={styles.back}>
              <Link to='/usersList'>
                ⟵Volver
              </Link>
            </h2>
            {this.state.ready && <UserCard user={this.state.actualUser}/> }
          </div>
          {this.state.ready && <ComplaintsListForUser reject={this.reject} complaints={this.state.complaints}/>}
        </div>
      </div>
    )
  }
}

export default ComplaintUserPage