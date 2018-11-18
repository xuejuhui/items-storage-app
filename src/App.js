import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {  fetchingData } from './actions/postsAction'

import Layout from './components/Layout.js'

class App extends Component {

  componentDidMount = () => {
    this.props.fetchingData();
  }
  
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchingData
}
export default connect(null, mapDispatchToProps)(App)

