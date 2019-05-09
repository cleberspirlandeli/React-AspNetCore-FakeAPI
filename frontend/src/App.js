import React, { Component } from 'react'
import './App.css'

import NavBar from './components/template/NavBar'
import Cliente from './components/cliente/cliente'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar logo={'Delivery'}/>
        <div className="container">
          <Cliente />
        </div>
      </div>
    )
  }
}