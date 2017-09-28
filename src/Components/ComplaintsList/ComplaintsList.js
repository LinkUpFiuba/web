import React, { Component } from 'react'
import ReactTable from 'react-table'
import styles from './ComplaintsList.css'
import { Link } from 'react-router-dom'

class ComplaintsList extends Component {
  render () {
    const columns = [ {
      Header: 'Usuario',
      accessor: 'userName' // String-based value accessors!
    }, {
      Header: 'Edad',
      accessor: 'age',
    }, {
      Header: 'Sexo',
      accessor: 'sex',
    }, {
      Header: 'Denuncias Pendientes',
      accessor: 'pending',
      Cell: props => <div className={styles.pending}>{props.value}</div>
    }, {
      accessor: 'uid',
      Cell: props => <Link to={'/usersList/' + props.value}>Ver Denuncias</Link>
    } ]

    return (
      <ReactTable
        data={this.props.complaints}
        columns={columns}
      />
    )
  }
}

export default ComplaintsList