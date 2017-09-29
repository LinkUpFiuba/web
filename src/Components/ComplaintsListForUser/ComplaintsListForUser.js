import React, { Component } from 'react'
import ComplaintCard from './ComplaintCard/ComplaintCard'
import styles from './ComplaintsListForUser.css'

class ComplaintsListForUser extends Component {
  render () {

    const data = {
      denouncerUser: {
        name: 'fede',
        age: 34,
        gender: 'male'
      },
      state: 'pending',
      message: 'this is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messahis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messaghis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messaghis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagge'
    }

    return (
      <div className={styles.board}>
        <ComplaintCard complaint={data}/>
        <ComplaintCard complaint={data}/>
        <ComplaintCard complaint={data}/>
        <ComplaintCard complaint={data}/>
        <ComplaintCard complaint={data}/>
        <ComplaintCard complaint={data}/>
      </div>

    )
  }
}

export default ComplaintsListForUser