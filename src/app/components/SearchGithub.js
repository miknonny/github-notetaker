import React from 'react'
import { History } from 'react-router'

export default React.createClass({
  mixins: [History],
  getRef (ref) {
    this.usernameRef = ref;
  },
  handleSubmit (e) {
    // e.preventDefault()
    let username = this.usernameRef.value
    this.usernameRef.value = ''
    // here react is adding the properties of history to our this instance.
    // history.pushState will transition us to /profile/username.
    this.history.pushState(null, `/profile/${username}`)
  },
  render () {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={this.getRef} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    )
  }
})
