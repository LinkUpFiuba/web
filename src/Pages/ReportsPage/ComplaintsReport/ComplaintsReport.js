import React, { Component } from 'react'

class ComplaintsReport extends Component {
  constructor ( props ) {
    super( props )
    this.state = {}
  }

  render () {
    const complaintsByType = this.props.complaintsByType
    return (
      <ul>
        {Object.keys(complaintsByType).map(key =>
          <li key={key}>
            {`${key}: ${complaintsByType[key]}`}
          </li>
        )}
      </ul>
    )
  }
}

export default ComplaintsReport
