import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css'

import NavBar from './components/template/NavBar'
import Routes from './components/routes/routes'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar logo={'Delivery'} />
          <div className="container">
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}