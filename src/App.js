import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form';
import Chart from './Chart';

class App extends Component {
  state = {
    show: false
  }

  onSubmit = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.onSubmit}/>
        <Chart show={this.state.show} />
      </div>
    );
  }
}

export default App;
