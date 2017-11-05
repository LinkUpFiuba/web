import React, { Component } from 'react'
import { VictoryPie } from 'victory-pie'
import { translateComplaintType } from "../../../Services/TranslateService"
import styles from './ComplaintsReport.css'

class ComplaintsReport extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      selected: {
        'other': false,
        'inappropiate-message': false,
        'suspicious': false,
        'spam': false
      }
    }
  }

  transformData = complaintsByType => {
    return Object.keys(complaintsByType).map(key => {
      return { x: key, y: complaintsByType[key], label: translateComplaintType(key).split(' ').join('\n') }
    })
  }

  handleClick = click => {
    console.log(click)
    this.setState({
      selected: { ...this.state.selected, [click]: !this.state.selected[click] }
    })
    console.log(this.state.selected)
  }

  handleSliceClick = () => {
    return [
      {
        target: "data",
        mutation: (props) => {
          this.handleClick(props.datum.x)
          console.log(props)
          const fill = props.style && props.style.fill
          return fill === "#c43a31" ? null : { style: { fill: "#c43a31" } }
        }
      }
    ]
  }

  render () {
    const complaintsByType = this.transformData(this.props.complaintsByType)
    return (
      <div className={styles.chart}>
        <VictoryPie
          data={complaintsByType}
          colorScale="qualitative"
          style={{ labels: { fontSize: 10 } }}
          events={[{
            target: "data",
            eventHandlers: {
              onClick: this.handleSliceClick
            }
          }]} />
      </div>
    )
  }
}

export default ComplaintsReport
