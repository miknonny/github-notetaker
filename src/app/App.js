import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import  { Router, Route } from 'react-router'
import { routes } from './config/routes'
import Main from './components/Main'

console.log(routes);

ReactDOM.render(
  <Router>
    {routes}
  </Router>,
  document.getElementById('app')
)
