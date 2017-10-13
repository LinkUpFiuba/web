import React, { Component } from 'react'
import styles from './AdCard.css'
import { Button, Glyphicon } from 'react-bootstrap'
import { translateAdState } from '../../../Services/TranslateService'

class AdCard extends Component {
  render () {
    return (
      <div className={styles.cardBody}>
        <img width={250} height={250} src={this.props.ad.image}/>
        <div className={styles.combo}>
          <h2>{this.props.ad.title}</h2>
          <div className={styles.delete}>
            <Button className={styles.delete} bsSize="small" bsStyle="danger"><Glyphicon
              glyph="glyphicon glyphicon-remove"/></Button>
          </div>
        </div>
        <div className={styles.combo}>
          <h5>Estado: {translateAdState(this.props.ad.state)}</h5>
          {this.props.ad.state === 'Active' &&
          <Button className={styles.secondaryButton} bsSize="small" bsStyle="warning">Desactivar</Button>}
          {this.props.ad.state === 'Disabled' &&
          <Button className={styles.secondaryButton} bsSize="small" bsStyle="success">Activar</Button>}
        </div>
      </div>
    )
  }
}

export default AdCard