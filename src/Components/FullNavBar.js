import React from 'react'
import { Navbar, NavItem } from 'react-bootstrap'
import Nav from 'react-bootstrap/es/Nav'
import { Component } from 'react/lib/ReactBaseClasses'

class FullNavBar extends Component {

  complaintsRoute = 'complaints'
  adsRoute = 'router'
  reportsRoute = 'reports'

  handleSignOut = () => {
    this.props.auth.signout( () => this.props.history.push( '/' ) )
  }

  handleSelect = event => {
    if ( event === this.complaintsRoute ) {
      this.props.history.push('/usersList')
    }
    if ( event === this.adsRoute ) {
      this.props.history.push('/ads')
    }
    if ( event === this.reportsRoute ) {
      this.props.history.push('/reports')
    }
  }

  render () {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Link Up Administrador</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav onSelect={this.handleSelect}>
            <NavItem eventKey={this.complaintsRoute}>
              Denuncias
            </NavItem>
            <NavItem eventKey={this.adsRoute}>
              Publicidades
            </NavItem>
            <NavItem eventKey={this.reportsRoute}>
              Reportes
            </NavItem>
          </Nav>
          <Nav pullRight onSelect={this.handleSignOut}>
            <NavItem eventKey={3}>
              Cerrar Sesión
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default FullNavBar
