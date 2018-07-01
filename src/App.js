import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React App</h1>
        </header>
        <p className="App-intro">
           Hello, world.
        </p>
        <P5Wrapper sketch={sketch}/>
      </div>
    );
  }
}

export default App;
