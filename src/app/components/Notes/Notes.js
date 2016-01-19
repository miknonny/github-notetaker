import React, { Component } from 'react'

export default class Notes extends Component {
  render () {
    return (
      <div>
        <p>NOTES</p>
        <p>{this.props.notes}</p>
      </div>
    )
  }
}
