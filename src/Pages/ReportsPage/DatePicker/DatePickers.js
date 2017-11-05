import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import styles from './DatePicker.css'
import { DatePicker } from "./DatePicker"

class DatePickers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: ''
    }
  }

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
            onMonthChange={this.handleStartMonthChange}
            onYearChange={this.handleStartYearChange} />
          <DatePicker
            label="Hasta"
            onMonthChange={this.handleEndMonthChange}
            onYearChange={this.handleEndYearChange} />
        </div>
        <Button className={styles.button} onClick={this.handleOnClick}>Actualizar</Button>
      </div>
    )
  }
}

export default DatePickers
