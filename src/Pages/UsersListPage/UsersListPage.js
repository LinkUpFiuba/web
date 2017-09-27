import React, {Component} from 'react'
import FullNavBar from "../../Components/FullNavBar";

class UsersListPage extends Component {
    render() {
        return (
            <div>
                <FullNavBar auth={this.props.auth} history={this.props.history} />
                <h1>Denuncias</h1>
            </div>
        )
    }
}

export default UsersListPage
