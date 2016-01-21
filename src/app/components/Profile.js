import React from 'react'
import { Router } from 'react-router'
import Repos from './Github/Repos'
import UserProfile from './Github/UserProfile'
import Notes from './Notes/Notes'
import ReactFireMixin from 'reactfire'
import Firebase from 'firebase'
import getGithubInfo from '../utils/helpers'

export default React.createClass({
  // Takes the 'this' keyword of your class. and adds a few reactfire methods on it.
  mixins: [ReactFireMixin],
  getInitialState () {
    return {
      notes: [1, 2, 3],
      bio: {},
      repos: []
    }
  },

  // This will be called right after the view is rendered.
  componentDidMount () {
    this.ref = new Firebase('https://gnotetaker.firebaseio.com/')
    this.init(this.props.params.username)
  },
  // This does something with the new Props we receive into our component.
  componentWillReceiveProps (nextProps) {
    this.unbind('notes');
    this.init(nextProps.params.username)
  },

  // this will remove connection to firebase once component is not active.
  componentWillUnmount () {
    this.unbind('notes')
  },

  init (username) {
    let childRef = this.ref.child(username)
    // this binds firebase to the notes array in state
    this.bindAsArray(childRef, 'notes')

    getGithubInfo(username)
      .then((data) => {
        // debugger
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      })
  },

  // manippulate that state where it leaves and pass down
  // the function to the child compnent that requires it.
  handleAddNote (newNote) {

    // firebaseapp/username/noOfItems/setItemhere
    this.ref.child(this.props.params.username).child(this.state.notes.length)
      .set(newNote)
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
            notes={this.state.notes}
            addNote={this.handleAddNote} />
        </div>
      </div>
    )
  }
})
