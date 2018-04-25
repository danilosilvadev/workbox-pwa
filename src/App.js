import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { displayNotification } from './registerServiceWorker'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => displayNotification()}>Notification</button>
        </header>
      </div>
    );
  }
}

export default App;
