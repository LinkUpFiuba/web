import React, { Component } from 'react'
import { VictoryPie } from 'victory-pie'
import { translateComplaintType } from "../../../Services/TranslateService"
import styles from './ComplaintsReport.css'

class ComplaintsReport extends Component {
  constructor ( props ) {
    super( props )
    this.state = {}
  }

  transformData = complaintsByType => {
    return Object.keys(complaintsByType).map(key => {
      return { x: key, y: complaintsByType[key], label: translateComplaintType(key).split(' ').join('\n') }
    })
  }

  render () {
    const complaintsByType = this.transformData(this.props.complaintsByType)
    return (
      <div className={styles.chart}>
        <VictoryPie
          data={complaintsByType}
          colorScale="qualitative"
          style={{ labels: { fontSize: 10 } }} />
      </div>
    )
  }
}

export default ComplaintsReport
