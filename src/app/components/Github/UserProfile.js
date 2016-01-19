import React, { Component } from 'react'

export default class UserProfile extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <p>USER PROFILE</p>
        <p>Username: {this.props.username}</p>
        <p>Bio: {this.props.bio.name}</p>
      </div>
    )
  }
}
