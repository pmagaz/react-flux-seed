import React, { Component } from 'react';
import { Router, Route } from 'react-router'
import Logo from '../logo'
import Home from '../../pages/home'

class App extends React.Component {

  render() {
    return (
      <Router>
        <Route path="/" component={Logo} />
        <Route path="/home" component={Home} />
      </Router>
    );
  }

}

export default App
