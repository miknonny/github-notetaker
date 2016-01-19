import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import  { Router, Route } from 'react-router'
import { routes } from './config/routes'
import Main from './components/Main'

ReactDOM.render(
  <Router>
    {routes}
  </Router>,
  document.getElementById('app')
)
