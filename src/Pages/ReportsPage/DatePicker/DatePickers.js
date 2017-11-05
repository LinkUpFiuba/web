import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
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
    this.setState({ startMonth: month })
  }

  handleEndMonthChange = month => {
    this.setState({ endMonth: month })
  }

  handleStartYearChange = year => {
    this.setState({ startYear: year })
  }

  handleEndYearChange = year => {
    this.setState({ endYear: year })
  }

  handleOnClick = () => {
    const startDate = `${this.state.startYear}-${this.state.startMonth}`
    const endDate = `${this.state.endYear}-${this.state.endMonth}`
    if (this.props.onNewDate) this.props.onNewDate(startDate, endDate)
  }

  render() {
    return (
      <div className={styles.dates}>
        <div>
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
        <Button className={styles.button} onClick={this.handleOnClick}>Actualizar</Button>
      </div>
    )
  }
}

export default DatePickers
