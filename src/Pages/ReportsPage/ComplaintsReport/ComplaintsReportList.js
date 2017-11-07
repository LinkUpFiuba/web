import React, { Component } from 'react'
import ReactTable from 'react-table'
import styles from './ComplaintsReportList.css'

class ComplaintsReportList extends Component {
  render () {
    const columns = [ {
      Header: 'Tipo',
      accessor: 'label',
      Cell: props => <div>{props.value}</div>
    }, {
      Header: `Cantidad de ${this.props.type}`,
      accessor: 'y',
      Cell: props => <div className={styles.center}>{props.value}</div>
    }]

    return (
      <ReactTable
        data={this.props.data}
        columns={columns}
        showPagination={false}
        pageSize={this.props.data.length}
        noDataText={`No hay ${this.props.type}`}
      />
    )
  }
}

export default ComplaintsReportList
