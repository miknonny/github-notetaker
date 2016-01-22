import React, { Component } from 'react'

export default class NotesList extends Component {
  render () {
    const { notes } = this.props
    return (
      <ul className="list-group">
        {notes.map((note, index) => {
          return <li className="list-group-item" key={index}>{note}</li>})
        }
      </ul>
    )
  }
}
