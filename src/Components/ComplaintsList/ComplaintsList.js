import React, {Component} from 'react'
import ReactTable from 'react-table'
import styles from './ComplaintsList.css'
import {Link} from "react-router-dom";

class ComplaintsList extends Component {
    render() {

        const data = [{
            user: 'Tanner Linsley',
            age: 26,
            sex: 'Male',
            pending: 10,
            id: 1
        },{
            user: 'Tanner Linsley',
            age: 6,
            sex: 'Male',
            pending: 15,
            id: 2
        }]

        const columns = [{
            Header: 'Usuario',
            accessor: 'user' // String-based value accessors!
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
            accessor: 'id',
            Cell: props => <Link to={'/usersList/'+props.value}>Ver Denuncias</Link>
        }]

        return (
            <ReactTable
                data={data}
                columns={columns}
            />
        )
    }
}

export default ComplaintsList