import React, { Component } from 'react'
import NotesList from './NotesList'

export default class Notes extends Component {
  render () {
    console.log('Notes: ', this.props.notes)
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
}
