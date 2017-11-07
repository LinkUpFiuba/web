import React, { Component } from 'react'
import { Button, ControlLabel, FormControl, FormGroup, Modal } from 'react-bootstrap'
import styles from './CreateAdModal.css'
import InputRange from 'react-input-range';
class CreateAdModal extends Component {

  constructor ( props ) {
    super( props )
    this.state =  props.ad || {
      title: '',
      image: '',
      state: 'Active',
      target: 'all',
      ageRange: {
        min: 18,
        max: 100
      },
    }
    this.handleTitleChange = this.handleTitleChange.bind( this )
    this.handleImageChange = this.handleImageChange.bind( this )
    this.handleStateChange = this.handleStateChange.bind( this )
    this.handleTargetChange = this.handleTargetChange.bind( this )
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

  handleTargetChange ( e ) {
    this.setState( { target: e.target.value } )
  }

  handleCreateButtonOnClick = () => {
    const title = this.state.title
    const image = this.state.image
    const state = this.state.state
    const target = this.state.target
    const ageRange = this.state.ageRange
    this.setState({
      title :'',
      image : '',
      state: 'Active',
      target:'all',
      ageRange: {
        min: 18,
        max: 100
      }
    })
    this.props.create( title, image, state, target, ageRange)
  }

  handleUpdateButtonOnClick = () => {
    const title = this.state.title
    const image = this.state.image
    const state = this.state.state
    const target = this.state.target
    const ageRange = this.state.ageRange
    this.setState({
      title :'',
      image : '',
      state: 'Active',
      target:'All',
      ageRange: {
        min: 18,
        max: 100
      }
    })
    this.props.update(this.props.ad.uid, {title, image, state, target, ageRange})
  }

  areFieldsReady = () => {
    return this.state.title.replace(/ /g,'') !== '' && this.state.image.replace(/ /g,'') !== ''
  }

  render () {
    return (
      <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.update ? 'Modificar publicidad' : 'Crear publicidad'}</Modal.Title>
        </Modal.Header>
        <div className={styles.form}>
          <form>
            <FormGroup>
              <ControlLabel>Título</ControlLabel>
              <FormControl
                type="text"
                value={this.state.title}
                placeholder= "Ingreso titulo"
                onChange={this.handleTitleChange}
              />
            </FormGroup>
            <FormGroup controlId="formInlineEmail">
              <ControlLabel>Link a imagen</ControlLabel>
              <div className={styles.help}>
                <span className={styles.italic}>{"\nTe recomendamos que la imagen sea tipo portaretrato y tenga una proporción 3:4 (Por ejemplo 750x1000)"}</span>
              </div>
              <FormControl
                type="link"
                onChange={this.handleImageChange}
                value={this.state.image}
                placeholder="http://link.to.image.com/image.jpg"/>
            </FormGroup>
            <FormGroup controlId="formTarget">
              <ControlLabel>Género destinado</ControlLabel>
              <FormControl
                value={this.state.target}
                componentClass="select"
                placeholder="Seleccionar género destinado de la publicidad"
                onChange={this.handleTargetChange}>
                <option value="all">Todos</option>
                <option value="male">Hombres</option>
                <option value="female">Mujeres</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formTarget">
              <ControlLabel>Rango edad</ControlLabel>
              <div className={styles.inputRange}>
                <InputRange
                  maxValue={100}
                  minValue={18}
                  value={this.state.ageRange}
                  onChange={ageRange => this.setState({ageRange})} />
              </div>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Estado inicial</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="Seleccionar estado inicial"
                onChange={this.handleStateChange}>
                <option value="Active">Activa</option>
                <option value="Disabled">Inhabilitada (No va a ser mostrada a los usuarios)</option>
              </FormControl>
            </FormGroup>
          </form>
        </div>
        <Modal.Footer>
          <Button bsStyle="danger" onClick={this.props.onClose}>Cancelar</Button>
          {this.areFieldsReady() &&
          <Button bsStyle="success" onClick={this.props.update ? this.handleUpdateButtonOnClick : this.handleCreateButtonOnClick}>
            {this.props.update ? 'Editar' : 'Crear'}
            </Button>}
          {!this.areFieldsReady() &&
          <Button bsStyle="success" disabled>Crear</Button>}
        </Modal.Footer>
      </Modal>
    )
  }
}

export default CreateAdModal
