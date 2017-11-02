import React, { Component } from 'react'
import { Button, ControlLabel, FormControl, FormGroup, Modal } from 'react-bootstrap'
import styles from './CreateAdModal.css'
import Slider from 'rc-slider';
import createSliderWithTooltip from 'rc-slider/es/createSliderWithTooltip'
import InputRange from 'react-input-range';
class CreateAdModal extends Component {

  constructor ( props ) {
    super( props )

    this.state = {
      title: '',
      image: '',
      state: 'Active',
      target: 'All',
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
    const agerRange = this.state.ageRange
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
    this.props.create( title, image, state, target, agerRange)
  }

  areFieldsReady = () => {
    return this.state.title.replace(/ /g,'') !== '' && this.state.image.replace(/ /g,'') !== ''
  }

  render () {
    const Range = createSliderWithTooltip(Slider.Range);
    return (
      <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear publicidad</Modal.Title>
        </Modal.Header>
        <div className={styles.form}>
          <form>
            <FormGroup>
              <ControlLabel>Título</ControlLabel>
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
            <FormGroup controlId="formTarget">
              <ControlLabel>Target</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="Seleccionar target de la publicidad"
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
