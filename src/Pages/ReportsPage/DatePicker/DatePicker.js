import React, { Component } from 'react'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap'
import styles from './DatePicker.css'

export class DatePicker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      month: '',
      year: ''
    }
  }

  handleMonthChange = e => {
    const month = e.target.value
    this.setState({ month })
    if (this.props.onMonthChange) this.props.onMonthChange(month)
  }

  handleYearChange = e => {
    const year = e.target.value
    this.setState({ year })
    if (this.props.onYearChange) this.props.onYearChange(year)
  }

  render() {
    return (
      <div>
        <form>
          <div className={styles.date}>
            <ControlLabel className={styles.noMargin}>{this.props.label}</ControlLabel>
            <div className={styles.date}>
              <FormGroup className={styles.pickers} controlId="monthSelect">
                <FormControl
                  componentClass="select"
                  placeholder="Mes"
                  onChange={this.handleMonthChange}>
                  <option value="01">Enero</option>
                  <option value="02">Febrero</option>
                  <option value="03">Marzo</option>
                  <option value="04">Abril</option>
                  <option value="05">Mayo</option>
                  <option value="06">Junio</option>
                  <option value="07">Julio</option>
                  <option value="08">Agosto</option>
                  <option value="09">Septiembre</option>
                  <option value="10">Octubre</option>
                  <option value="11">Noviembre</option>
                  <option value="12">Diciembre</option>
                </FormControl>
              </FormGroup>
              <FormGroup className={styles.pickers} controlId="yearSelect">
                <FormControl
                  componentClass="select"
                  placeholder="Año"
                  onChange={this.handleYearChange}>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                </FormControl>
              </FormGroup>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
