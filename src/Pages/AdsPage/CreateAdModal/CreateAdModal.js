import React, { Component } from 'react'
import { Button, ControlLabel, FormControl, FormGroup, Modal } from 'react-bootstrap'
import styles from './CreateAdModal.css'

class CreateAdModal extends Component {

  constructor ( props ) {
    super( props )

    this.state = {
      title: '',
      image: '',
      state: 'Active'
    }
    this.handleTitleChange = this.handleTitleChange.bind( this )
    this.handleImageChange = this.handleImageChange.bind( this )
    this.handleStateChange = this.handleStateChange.bind( this )
  }

  handleTitleChange ( e ) {
    this.setState( { title: e.target.value } )
  }

  handleStateChange ( e ) {
    this.setState( { state: e.target.value } )
  }

  handleImageChange ( e ) {
    this.setState( { image: e.target.value } )
  }

  handleCreateButtonOnClick = () => {
    this.props.create( this.state.title, this.state.image, this.state.state )
  }

  areFieldsReady = () => {
    return this.state.title.replace(/ /g,'') !== '' && this.state.image.replace(/ /g,'') !== ''
  }

  render () {
    return (
      <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear publicidad</Modal.Title>
        </Modal.Header>
        <div className={styles.form}>
          <form>
            <FormGroup>
              <ControlLabel>Titulo</ControlLabel>
              <FormControl
                type="text"
                value={this.state.title}
                placeholder="Ingreso titulo"
                onChange={this.handleTitleChange}
              />
            </FormGroup>
            <FormGroup controlId="formInlineEmail">
              <ControlLabel>Link a imagen</ControlLabel>
              <FormControl
                type="link"
                onChange={this.handleImageChange}
                value={this.state.image}
                placeholder="http://link.to.image.com/image.jpg"/>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Estado inicial</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="Seleccionar estado inicial"
                onChange={this.handleStateChange}>
                <option value="Active">Activa</option>
                <option value="Disabled">Inhabilitada (no va a ser mostrada a los usuarios)</option>
              </FormControl>
            </FormGroup>
          </form>
        </div>
        <Modal.Footer>
          <Button bsStyle="danger" onClick={this.props.onClose}>Cancelar</Button>
          {this.areFieldsReady() &&
          <Button bsStyle="success" onClick={this.handleCreateButtonOnClick}>Crear</Button>}
          {!this.areFieldsReady() &&
          <Button bsStyle="success" disabled>Crear</Button>}
        </Modal.Footer>
      </Modal>
    )
  }
}

export default CreateAdModal
