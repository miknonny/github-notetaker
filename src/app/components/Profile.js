import React from 'react'
import { Router } from 'react-router'
import Repos from './Github/Repos'
import UserProfile from './Github/UserProfile'
import Notes from './Notes/Notes'
import ReactFireMixin from 'reactfire'
import Firebase from 'firebase'

export const Profile = React.createClass({
  // Takes the 'this' keyword of your class. and adds a few reactfire methods on it.
  mixins: [ReactFireMixin],
  getInitialState () {
    return {
      notes: [1, 2, 3],
      bio: {
        name: 'Mbah Michael'
      },
      repos: ['a', 'b', 'c']
    }
  },

  // This will be called right after the view is rendered.
  componentDidMount () {
    this.ref = new Firebase('https://gnotetaker.firebaseio.com/')
    let childRef = this.ref.child(this.props.params.username)
    // this binds firebase to the notes array in state
    this.bindAsArray(childRef, 'notes')
  },

  // this will remove connection to firebase once component is not active.
  componentWillUnmount () {
    this.unbind('notes')
  },

  render () {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username}
            bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username}
            repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username}
            notes={this.state.notes} />
        </div>
      </div>
    )
  }
})
