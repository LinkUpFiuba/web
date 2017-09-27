import React from 'react'
import {Navbar, NavItem} from 'react-bootstrap'
import Nav from 'react-bootstrap/es/Nav'
import {Component} from 'react/lib/ReactBaseClasses'
import {withRouter} from "react-router-dom";

class FullNavBar extends Component {

    handleSelect = () => {
        this.props.auth.signout(() => this.props.history.push('/'))
        console.log("fede")
    }


    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Link Up Admin Page</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Link
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
                        </NavItem>
                    </Nav>
                    <Nav pullRight onSelect={this.handleSelect}>
                        <NavItem eventKey={3}>
                            Sign Out
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default FullNavBar
