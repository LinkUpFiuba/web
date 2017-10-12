import React, { Component } from 'react'
import styles from './AdCard.css'
import { Button, Glyphicon } from 'react-bootstrap'

class AdCard extends Component {
  render () {
    return (
      <div className={styles.cardBody}>
        <img width={250} height={250} src={this.props.ad.image}/>
        <div className={styles.title}>
          <h2>{this.props.ad.title}</h2>
          <Button bsStyle="danger"><Glyphicon glyph="glyphicon glyphicon-remove"/></Button>
        </div>
        <h5>Estado: {this.props.ad.state}</h5>
      </div>
    )
  }
}

export default AdCard