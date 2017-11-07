import React, { Component } from 'react'
import { VictoryChart, VictoryLine, VictoryScatter } from 'victory-chart'
import { VictoryTheme } from 'victory'
import styles from './UsersReport.css'
import UsersReportList from "./UsersReportList"

class UsersReport extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      selected: '',
      disabledUsersForType: []
    }
  }

  transformUsersData = (data) => {
    const usersData = []
    const premiumUsersData = []
    // eslint-disable-next-line array-callback-return
    Object.keys(data).map(key => {
      usersData.push({ x: key, y: data[key].users })
      premiumUsersData.push({ x: key, y: data[key].premiumUsers })
    })
    return { usersData, premiumUsersData }
  }

  render () {
    const usersColor = "#c43a31"
    const premiumUsersColors = "#313ac4"
    const { usersData, premiumUsersData } = this.transformUsersData(this.props.usersData)
    const domain = { y: [0, Math.max.apply(Math, usersData.map(o => o.y))] }
    return (
      <div>
        <div className={styles.chart}>
          <VictoryChart theme={VictoryTheme.grayscale}>
            <VictoryLine
              data={usersData}
              interpolation="monotoneX"
              domain={domain}
              style={{ data: { stroke: usersColor } }}
            />
            <VictoryScatter
              data={usersData}
              size={5}
              domain={domain}
              style={{ data: { fill: usersColor } }}
            />
            <VictoryLine
              data={premiumUsersData}
              interpolation="monotoneX"
              domain={domain}
              style={{ data: { stroke: premiumUsersColors } }}
            />
            <VictoryScatter
              data={premiumUsersData}
              size={5}
              domain={domain}
              style={{ data: { fill: premiumUsersColors } }}
            />
          </VictoryChart>
        </div>
        <div className={styles.container}>
          <div className={styles.list}>
            <div className={styles.title}>
              <h4 className={styles.users}>●</h4>
              <h4>Usuarios</h4>
              <h4 className={styles.users}>●</h4>
            </div>
            <UsersReportList data={usersData}/>
          </div>
          <div className={styles.list}>
            <div className={styles.title}>
              <h4 className={styles.premiumUsers}>●</h4>
              <h4> Usuarios premium </h4>
              <h4 className={styles.premiumUsers}>●</h4>
            </div>
            <UsersReportList data={premiumUsersData}/>
          </div>
        </div>
      </div>
    )
  }
}

export default UsersReport
