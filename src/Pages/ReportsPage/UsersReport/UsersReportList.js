import React, { Component } from 'react'
import ReactTable from 'react-table'
import styles from './UsersReportList.css'

class UsersReportList extends Component {
  render () {
    const columns = [ {
      Header: 'Fecha',
      accessor: 'x',
      Cell: props => <div>{props.value}</div>
    }, {
      Header: 'Cantidad de usuarios',
      accessor: 'y',
      Cell: props => <div className={styles.center}>{props.value}</div>
    }]

    return (
      <ReactTable
        data={this.props.data}
        columns={columns}
        showPagination={false}
        pageSize={this.props.data.length}
        noDataText='No hay usuarios'
      />
    )
  }
}

export default UsersReportList
