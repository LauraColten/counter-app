import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    countValue: 0
  }
  handleClick() {
    const newValue = this.state.countValue + 1;
    this.setState({countValue: newValue});
  }
  render() {
    return (
      <div className="App">
        <h3>{this.state.countValue}</h3> 
        <button onClick={()=> this.handleClick()}>click me</button>
      </div>
    );
  }
}

export default App;
