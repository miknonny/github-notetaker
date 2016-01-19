import React, { Component } from 'react'
import { Router } from 'react-router'
import Repos from './Github/Repos'
import UserProfile from './Github/UserProfile'
import Notes from './Notes/Notes'

export default class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      notes: [1, 2, 3],
      bio: {
        name: 'Mbah Michael'
      },
      repos: ['a', 'b', 'c']
    }
  }
  render () {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes}/>
        </div>
      </div>
    )
  }
}
