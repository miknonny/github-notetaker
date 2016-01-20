import React, { Component, PropTypes } from 'react'

export default class Repos extends Component {
  render () {
    return (
      <div>
        <p>REPOS</p>
        <p>username: {this.props.username}</p>
        <p>{this.props.repos}</p>
      </div>
    )
  }
}

Repos.propTypes = {
  username: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired
}
