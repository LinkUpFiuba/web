import React, {Component} from 'react'
import FullNavBar from "../../Components/FullNavBar";
import styles from "./usersListPage.css"
import ComplaintsList from "../../Components/ComplaintsList/ComplaintsList";

class UsersListPage extends Component {
    render() {
        return (
            <div>
                <FullNavBar auth={this.props.auth} history={this.props.history}/>
                <div className={styles.body}>
                    <h1>Denuncias</h1>
                    <ComplaintsList/>
                </div>
            </div>
        )
    }
}

export default UsersListPage
