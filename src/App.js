import React, { Component } from 'react';
import './App.css';
import ChatUI from './components/ChatUI/ChatUI.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ChatUI/>
        </header>
      </div>
    );
  }
}

export default App;
