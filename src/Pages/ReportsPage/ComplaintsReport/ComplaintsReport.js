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
        }
      }
    ]
  }

  render () {
    const complaintsByType = this.transformComplaintsTypeData(this.props.complaintsByType)
    const disabledUsersForType = this.state.disabledUsersForType.filter(category => category.y !== 0)
    return (
      <div className={styles.container}>
        {complaintsByType.length === 0 &&
        <div className={styles.half}>
          <span className={styles.error}>No se encontraron denuncias en ese rango de fechas</span>
        </div>}
        {complaintsByType.length > 0 &&
        <div className={styles.half}>
          <h4>Cantidad de denuncias según el tipo</h4>
          <div className={styles.chart}>
            <VictoryPie
              data={complaintsByType}
              colorScale="qualitative"
              labelRadius={complaintsByType.length === 1 ? 1 : 70}
              padding={{ top: 10, bottom: 10 }}
              style={{ labels: { fill: "white", fontSize: 14 } }}
              events={[{
                target: "data",
                eventHandlers: {
                  onClick: this.handleSliceClick
                }
              }]} />
          </div>
          <div className={styles.center}>
            <ComplaintsTypeList data={complaintsByType} type='denuncias'/>
          </div>
        </div>}
        {disabledUsersForType.length > 0 &&
        <div className={styles.half}>
          <h4>{`Usuarios con denuncias de tipo "${translateComplaintType(this.state.selected)}"`}</h4>
          <div className={styles.chart}>
            <VictoryPie
              data={disabledUsersForType}
              colorScale="qualitative"
              padding={{ top: 10, bottom: 10 }}
              labelRadius={disabledUsersForType.length === 1 ? 1 : 70}
              style={{ labels: { fill: "white", fontSize: 14 } }} />
          </div>
          <div className={styles.center}>
            <ComplaintsTypeList data={this.state.disabledUsersForType} type='usuarios'/>
          </div>
        </div>}
      </div>
    )
  }
}

export default ComplaintsReport
