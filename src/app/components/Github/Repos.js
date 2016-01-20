import React, { Component, PropTypes } from 'react'

export default class Repos extends Component {
  render () {
    console.log('REPO: ', this.props.repos)
    return (
      <div>
        <p>REPOS</p>
        <p>username: {this.props.username}</p>
      </div>
    )
  }
}

Repos.propTypes = {
  username: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired
}
