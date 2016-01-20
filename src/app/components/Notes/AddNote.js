import React, { Component, PropTypes } from 'react'

export default class AddNote extends Component {

  handleSubmit () {
    // debugger;
    let newNote = this.refs.input.value
    this.props.addNote(newNote)
    this.refs.input.value = '';
  }
  render () {
    // debugger;
    return (
      <div className="input-group">
        <input type="text"
          className="form-control"
          placeholder="Add New Note"
          ref="input" />
        <span className="input-group-btn">
          <button className="btn btn-default"
            type="button"
            onClick={this.handleSubmit.bind(this)}>
            Submit
          </button>
        </span>
      </div>
    )
  }
}

AddNote.propTypes = {
  username: PropTypes.string.isRequired,
  addNote: PropTypes.func.isRequired
}
