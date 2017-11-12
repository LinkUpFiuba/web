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
      const newKey = key.replace(/([0-9]{4})-([0-9]{2})/,"$2/$1")
      usersData.push({ x: newKey, y: data[key].users })
      premiumUsersData.push({ x: newKey, y: data[key].premiumUsers })
    })
    return { usersData, premiumUsersData }
  }

  render () {
    const usersColor = "#c43a31"
    const premiumUsersColors = "#313ac4"
    const { usersData, premiumUsersData } = this.transformUsersData(this.props.usersData)
    const haveData = Object.keys(usersData).length > 0 && Object.keys(premiumUsersData).length > 0
    const domain = { y: [0, Math.max.apply(Math, usersData.map(o => o.y)) + 1] }
    return (
      <div>
        {!haveData &&
        <div>
          <span className={styles.error}>El rango de fechas especificado es incorrecto</span>
        </div>}
        {haveData &&
        <div>
          <div className={styles.chart}>
            <VictoryChart theme={VictoryTheme.grayscale} domain={domain}>
              <VictoryLine
                data={usersData}
                interpolation="monotoneX"
                style={{ data: { stroke: usersColor } }}
              />
              <VictoryScatter
                data={usersData}
                size={3}
                style={{ data: { fill: usersColor } }}
              />
              <VictoryLine
                data={premiumUsersData}
                interpolation="monotoneX"
                style={{ data: { stroke: premiumUsersColors } }}
              />
              <VictoryScatter
                data={premiumUsersData}
                size={3}
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
        </div>}
      </div>
    )
  }
}

export default UsersReport
