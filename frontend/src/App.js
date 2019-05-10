import React, { Component } from 'react'
import './App.css'

import NavBar from './components/template/NavBar'
import Routes from './components/routes/routes'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar logo={'Delivery'} />
        <div className="container">
          <Routes />
        </div>
      </div>
    )
  }
}