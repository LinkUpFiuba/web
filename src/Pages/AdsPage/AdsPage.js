import React, { Component } from 'react'
import FullNavBar from '../../Components/FullNavBar'
import styles from './AdsPage.css'
import AdCard from './AdCard/AdCard'
import { loadAds } from '../../Services/AdsService'
import Loading from '../../Components/Loading/Loading'

class AdsPage extends Component {

  state = {
    ads: [],
    ready: false,
  }

  componentDidMount = () => {
    loadAds()
      .then( ads => this.setState( { ads } ) )
      .then( () => this.setState( { ready: true } ) )
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
          <h1>Publicidades</h1>
          {!this.state.ready &&
          <Loading message="Cargando publicidades" size={150}/> }
          {this.state.ready &&
          <div className={styles.adsList}>
            {allCards}
          </div>}
        </div>
      </div>
    )
  }
}

export default AdsPage

