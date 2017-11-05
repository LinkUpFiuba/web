import React, { Component } from 'react'
import { VictoryPie } from 'victory-pie'
import { translateComplaintType, translateCondition } from "../../../Services/TranslateService"
import styles from './ComplaintsReport.css'
import ComplaintsTypeList from "./ComplaintsReportList"
import { loadDisabledUsersForType } from '../../../Services/ReportsService'

class ComplaintsReport extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      selected: '',
      disabledUsersForType: []
    }
  }

  transformComplaintsTypeData = complaintsByType => {
    return Object.keys(complaintsByType).map(key => {
      return { x: key, y: complaintsByType[key], label: translateComplaintType(key).split(' ').join('\n') }
    })
  }

  transformDisabledUsersData = data => {
    return Object.keys(data).map(key => {
      return { x: key, y: data[key], label: translateCondition(key).split(' ').join('\n') }
    })
  }

  handleClick = click => {
    this.setState({ ready: false, selected: click })
    loadDisabledUsersForType(click)
      .then(data => this.setState({ disabledUsersForType: this.transformDisabledUsersData(data) }))
      .then(() => this.setState({ ready: true }))
  }

  handleSliceClick = () => {
    return [
      {
        target: "data",
        mutation: props => {
          this.handleClick(props.datum.x)
          const fill = props.style && props.style.fill
          return fill === "#c43a31" ? null : { style: { fill: "#c43a31" } }
        }
      }
    ]
  }

  render () {
    const complaintsByType = this.transformComplaintsTypeData(this.props.complaintsByType)
    return (
      <div className={styles.container}>
        <div className={styles.half}>
          <div className={styles.chart}>
            <VictoryPie
              data={complaintsByType}
              colorScale="qualitative"
              labelRadius={70}
              style={{ labels: { fill: "white", fontSize: 10 } }}
              events={[{
                target: "data",
                eventHandlers: {
                  onClick: this.handleSliceClick
                }
              }]} />
          </div>
          <div>
            <ComplaintsTypeList data={complaintsByType} type='denuncias'/>
          </div>
        </div>
        {this.state.disabledUsersForType.length > 0 && <div className={styles.half}>
          <div className={styles.chart}>
            <VictoryPie
              data={this.state.disabledUsersForType}
              colorScale="qualitative"
              labelRadius={70}
              style={{ labels: { fill: "white", fontSize: 10 } }} />
          </div>
          <div>
            <ComplaintsTypeList data={this.state.disabledUsersForType} type='usuarios'/>
          </div>
        </div>}
      </div>
    )
  }
}

export default ComplaintsReport
