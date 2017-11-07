import React, { Component } from 'react'
import FullNavBar from '../../Components/FullNavBar'
import styles from './AdsPage.css'
import AdCard from './AdCard/AdCard'
import { deleteAd, loadAds, createAd, enableAd, disableAd, updateAd } from '../../Services/AdsService'
import Loading from '../../Components/Loading/Loading'
import Button from 'react-bootstrap/es/Button'
import CreateAdModal from './CreateAdModal/CreateAdModal'

class AdsPage extends Component {

  state = {
    ads: [],
    ready: false,
    showCreateModal: false,
    showUpdateModal: false,
    actualAd: {}
  }

  componentDidMount = () => {
    loadAds()
      .then( ads => this.setState( { ads } ) )
      .then( () => this.setState( { ready: true } ) )
  }

  handleDeleteAd = ( adUid ) => {
    this.setState( { ready: false } )
    deleteAd( adUid )
      .then(() => this.componentDidMount())
  }

  handleEnableAdClick = ( adUid ) => {
    this.setState( { ready: false } )
    enableAd( adUid )
      .then(() => this.componentDidMount())
  }

  handleDisableAdClick = ( adUid ) => {
    this.setState( { ready: false } )
    disableAd( adUid )
      .then(() => this.componentDidMount())
  }

  onClickCreateAd = ( title, image, state, target, ageRange ) => {
    this.setState( { showCreateModal: false, ready: false } )
    createAd( { title: title, image: image, state: state, target: target, ageRange: ageRange } )
      .then( () => {
        this.componentDidMount()
      } )
  }

  onClickUpdateAd = ( adUid, ad ) => {
    this.setState( { showUpdateModal: false, ready: false } )
    updateAd(adUid, ad)
      .then( () => {
        this.componentDidMount()
      } )
  }


  handleCreateModalClose = () => {
    this.setState( { showCreateModal: false } )
  }

  handleCreateAdButtonOnClick = () => {
    this.setState( { showCreateModal: true } )
  }

  handleUpdateModalClose = () => {
    this.setState( { actualAd: {}, showUpdateModal: false } )
  }

  handleUpdateAdButtonOnClick = (ad) => {
    this.setState( { actualAd: ad, showUpdateModal: true } )
  }

  render () {
    const allCards = this.state.ready && this.state.ads.map( ad =>
        <div className={styles.grow} key={ad.uid}>
          <AdCard update={this.handleUpdateAdButtonOnClick} enable={this.handleEnableAdClick} disable={this.handleDisableAdClick} delete={this.handleDeleteAd} ad={ad}/>
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
          {this.state.showCreateModal && <CreateAdModal create={this.onClickCreateAd} show={this.state.showCreateModal} onClose={this.handleCreateModalClose}/>}
          {this.state.showUpdateModal && <CreateAdModal ad={this.state.actualAd} update={this.onClickUpdateAd} show={this.state.showUpdateModal} onClose={this.handleUpdateModalClose}/>}
        </div>
      </div>
    )
  }
}

export default AdsPage

