import React, { Component } from 'react'
import FullNavBar from '../../Components/FullNavBar'
import styles from './AdsPage.css'
import AdCard from './AdCard/AdCard'

class AdsPage extends Component {
  // Two states: Active or disabled
  adds = [ {
    title: 'Facebook',
    image: 'https://www.facebook.com/images/fb_icon_325x325.png',
    state: 'Active'
  }, {
    title: 'Google',
    image: 'https://pbs.twimg.com/profile_images/839721704163155970/LI_TRk1z.jpg',
    state: 'Active'
  } ]

  render () {
    const allCards = this.adds.map( ad =>
      <div className={styles.grow}>
        <AdCard ad={ad}/>
      </div>
    )
    return (
      <div>
        <FullNavBar auth={this.props.auth} history={this.props.history}/>
        <div className={styles.body}>
          <h1>Publicidades</h1>
          <div className={styles.adsList}>
            {allCards}
          </div>
        </div>
      </div>
    )
  }
}

export default AdsPage

