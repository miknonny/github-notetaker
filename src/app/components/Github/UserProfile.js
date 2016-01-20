import React, { Component, PropTypes } from 'react'

export default class UserProfile extends Component {
  render () {
    console.log('BIO: ', this.props.bio)
    return (
      <div>
        <p>USER PROFILE</p>
        <p>Username: {this.props.username}</p>
      </div>
    )
  }
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  bio: PropTypes.object.isRequired
}
