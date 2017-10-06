import React, { Component } from 'react'
import ReactTable from 'react-table'
import styles from './ComplaintsList.css'
import { translateCondition, translateGender } from '../../Services/TranslateService'
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
      Cell: props => <div>{translateGender( props.value )}</div>
    }, {
      Header: 'Denuncias Nuevas',
      accessor: 'new',
      Cell: props => <div className={styles.pending}>{props.value}</div>
    }, {
      Header: 'Total de denuncias',
      accessor: 'total',
    }, {
      Header: 'Condicion',
      accessor: 'condition',
      Cell: props => <div>{translateCondition( props.value )}</div>
    }, {
      accessor: 'userUid',
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