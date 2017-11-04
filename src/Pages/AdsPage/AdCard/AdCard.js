import React, { Component } from 'react'
import styles from './AdCard.css'
import { Button, Glyphicon } from 'react-bootstrap'
import { translateAdState, translateGender } from '../../../Services/TranslateService'

class AdCard extends Component {

  handleDeleteAd = () => {
    this.props.delete( this.props.ad.uid )
  }

  handleEnableAd = () => {
    this.props.enable( this.props.ad.uid )
  }

  handleDisableAd = () => {
    this.props.disable( this.props.ad.uid )
  }

  handleUpdateAd = () => {
    this.props.update( this.props.ad )
  }

  render () {
    return (
      <div className={styles.cardBody}>
        <img width={250} height={250} src={this.props.ad.image}/>
        <div className={styles.combo}>
          <h2>{this.props.ad.title}</h2>
          <div className={styles.delete}>
            <Button onClick={this.handleUpdateAd} className={styles.delete} bsSize="small" bsStyle="warning">
              <Glyphicon glyph="glyphicon glyphicon-pencil"/>
            </Button>
            <Button onClick={this.handleDeleteAd} className={styles.delete} bsSize="small" bsStyle="danger">
              <Glyphicon glyph="glyphicon glyphicon-remove"/>
            </Button>
          </div>
        </div>
        <h5>Target: {translateGender( this.props.ad.target )}</h5>
        <h5>Rango de Edad: {this.props.ad.ageRange.min} - {this.props.ad.ageRange.max} años</h5>
        <div className={styles.combo}>
          <h5>Estado: {translateAdState( this.props.ad.state )}</h5>
          {this.props.ad.state === 'Active' &&
          <Button className={styles.secondaryButton} onClick={this.handleDisableAd} bsSize="small" bsStyle="warning">Desactivar</Button>}
          {this.props.ad.state === 'Disabled' &&
          <Button className={styles.secondaryButton} onClick={this.handleEnableAd} bsSize="small" bsStyle="success">Activar</Button>}
        </div>
      </div>
    )
  }
}

export default AdCard