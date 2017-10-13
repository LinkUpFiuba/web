import React, { Component } from 'react'
import ReactTable from 'react-table'
import styles from './ComplaintsList.css'
import { translateCondition, translateGender } from '../../../Services/TranslateService'
import { Link } from 'react-router-dom'

class ComplaintsList extends Component {
  render () {
    const columns = [ {
      Header: 'Usuario',
      accessor: 'userName', // String-based value accessors!
      Cell: props => <div className={styles.column}>{props.value} </div>
    }, {
      Header: 'Edad',
      accessor: 'age',
      Cell: props => <div className={styles.column}>{props.value}</div>
    }, {
      Header: 'Sexo',
      accessor: 'sex',
      Cell: props => <div className={styles.column}>{translateGender( props.value )}</div>
    }, {
      Header: 'Nuevas Denuncias',
      accessor: 'new',
      Cell: props => <div className={styles.pending}>{props.value}</div>
    }, {
      Header: 'Total de denuncias',
      accessor: 'total',
      Cell: props => <div className={styles.column}>{props.value} </div >
    }, {
      Header: 'Condición',
      accessor: 'condition',
      Cell: props => <div className={styles.column}>{translateCondition( props.value )}</div>
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