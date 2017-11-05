import React, { Component } from 'react'
import ReactTable from 'react-table'
import styles from './ComplaintsTypeList.css'

class ComplaintsTypeList extends Component {
  render () {
    const columns = [ {
      Header: 'Tipo',
      accessor: 'label',
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
        pageSize={4}
      />
    )
  }
}

export default ComplaintsTypeList
