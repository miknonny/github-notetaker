import React, { Component } from 'react'

export default class Repos extends Component {
  render () {
    return (
      <div>
        <p>REPOS</p>
        <p>{this.props.repos}</p>
      </div>
    )
  }
}
