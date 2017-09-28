import React, {Component} from 'react'
import FullNavBar from "../../Components/FullNavBar";
import styles from "./usersListPage.css"
import ComplaintsList from "../../Components/ComplaintsList/ComplaintsList";
import {loadComplaints} from "../../Services/ComplaintsService";

class UsersListPage extends Component {

    state = {
        complaints: [],
        ready: false,
    };

    componentDidMount = () => {
        loadComplaints()
            .then(complaints => this.setState({complaints}))
            .then(() => this.setState({ready: true}))
    };

    render() {
        return (
            <div>
                <FullNavBar auth={this.props.auth} history={this.props.history}/>
                <div className={styles.body}>
                    <h1>Denuncias</h1>
                    {this.state.ready &&
                        <ComplaintsList complaints={this.state.complaints}/>}
                </div>
            </div>
        )
    }
}

export default UsersListPage
