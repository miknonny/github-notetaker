import React, { Component } from 'react'
import Repos from './Github/Repos'
import UserProfile from './Github/UserProfile'
import Notes from './Notes/Notes'
import getGithubInfo from '../utils/helpers'
import Rebase from 're-base'

const base = Rebase.createClass('https://gnotetaker.firebaseio.com/')
export default class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      notes: [],
      bio: {},
      repos: []
    }
  }
  // This will be called right after the view is rendered.
  componentDidMount () {
    // creates or binds to firebase endpoint. db.firebase.com/username
    this.init(this.props.params.username)
  }
  // This does something with the new Props we receive into our component.
  componentWillReceiveProps (nextProps) {
    base.removeBinding(this.ref)
    this.init(nextProps.params.username)
  }

  // this will remove connection to firebase once component is not active.
  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  // Init handles are
  init (username) {
    // This allows you to bind a property on your state to firebase
    // endpoint ${username}.
    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes'
    })

    getGithubInfo(username)
      .then((data) => {
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      })
  }

  handleAddNote (newNote) {
    /**
     * Base.post receives the endpoint that we want to post to and the data
     * we trying to post.
     * @param {string} endpoint on firebase
     * @param {obj} data we wish to insert to the endpoint.
     */
    base.post(this.props.params.username, {
      data: [...this.state.notes, newNote]
    })
  }

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
            addNote={(newNote) => this.handleAddNote(newNote)} />
        </div>
      </div>
    )
  }
}
