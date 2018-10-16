import React, { Component } from 'react';
import './App.css';
import ResultsByName from './components/ResultsByName'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Filter Search</p>
        </header>
        <div className="center">
          <ResultsByName />
        </div>
      </div>
    );
  }
}

export default App;
