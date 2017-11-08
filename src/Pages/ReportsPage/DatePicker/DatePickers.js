import React, { Component } from 'react'
import styles from './DatePicker.css'
import { DatePicker } from "./DatePicker"

class DatePickers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      startMonth: this.defaultStartMonth,
      startYear: this.defaultStartYear,
      endMonth: this.defaultEndMonth,
      endYear: this.defaultEndYear
    }
  }

  defaultStartMonth = '09'
  defaultStartYear = '2017'
  defaultEndMonth = '11'
  defaultEndYear = '2017'

  handleStartMonthChange = month => {
    this.setState({ startMonth: month }, () => {
      this.handleOnDateChange()
    })
  }

  handleEndMonthChange = month => {
    this.setState({ endMonth: month }, () => {
      this.handleOnDateChange()
    })
  }

  handleStartYearChange = year => {
    this.setState({ startYear: year }, () => {
      this.handleOnDateChange()
    })
  }

  handleEndYearChange = year => {
    this.setState({ endYear: year }, () => {
      this.handleOnDateChange()
    })
  }

  handleOnDateChange = () => {
    const startDate = `${this.state.startYear ? `${this.state.startYear}-${this.state.startMonth}` : undefined}`
    const endDate = `${this.state.endYear ? `${this.state.endYear}-${this.state.endMonth}` : undefined}`
    if (this.props.onNewDate) this.props.onNewDate(startDate, endDate)
  }

  render() {
    return (
      <div className={styles.dates}>
        <div className={styles.front}>
          <DatePicker
            label="Desde"
            defaultMonth={this.defaultStartMonth}
            defaultYear={this.defaultStartYear}
            onMonthChange={this.handleStartMonthChange}
            onYearChange={this.handleStartYearChange} />
          <DatePicker
            label="Hasta"
            defaultMonth={this.defaultEndMonth}
            defaultYear={this.defaultEndYear}
            onMonthChange={this.handleEndMonthChange}
            onYearChange={this.handleEndYearChange} />
        </div>
      </div>
    )
  }
}

export default DatePickers
