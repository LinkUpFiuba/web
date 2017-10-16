import React, { Component } from 'react'
import FullNavBar from '../../Components/FullNavBar'
import styles from './AdsPage.css'
import AdCard from './AdCard/AdCard'
import { loadAds, createAd } from '../../Services/AdsService'
import Loading from '../../Components/Loading/Loading'
import Button from 'react-bootstrap/es/Button'
import CreateAdModal from './CreateAdModal/CreateAdModal'

class AdsPage extends Component {

  state = {
    ads: [],
    ready: false,
    showModal: false
  }

  componentDidMount = () => {
    loadAds()
      .then( ads => this.setState( { ads } ) )
      .then( () => this.setState( { ready: true } ) )
  }

  onClickCreateAd = ( title, image, state ) => {
    this.setState( { showModal: false, ready: false } )
    createAd( { title: title, image: image, state: state } )
      .then( () => {
        this.componentDidMount()
      } )
  }

  handleModalClose = () => {
    this.setState( { showModal: false } )
  }

  handleCreateAdButtonOnClick = () => {
    this.setState( { showModal: true } )
  }

  render () {
    const allCards = this.state.ready && this.state.ads.map( ad =>
        <div className={styles.grow}>
          <AdCard ad={ad}/>
        </div>
      )

    return (
      <div>
        <FullNavBar auth={this.props.auth} history={this.props.history}/>
        <div className={styles.body}>
          <div className={styles.title}>
            <h1>Publicidades</h1>
            <Button className={styles.createButton} onClick={this.handleCreateAdButtonOnClick}> Crear publicidad </Button>
          </div>
          {!this.state.ready &&
          <Loading message="Cargando publicidades" size={150}/> }
          {this.state.ready &&
          <div className={styles.adsList}>
            {allCards}
          </div>}
          <CreateAdModal create={this.onClickCreateAd} show={this.state.showModal} onClose={this.handleModalClose}/>
        </div>
      </div>
    )
  }
}

export default AdsPage

