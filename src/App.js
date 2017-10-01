import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Chart from './Chart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Chart />
      </div>
    );
  }
}

export default App;
