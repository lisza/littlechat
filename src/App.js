import React, { Component } from 'react';
import './App.css';
import Chat from './components/Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chat user="Joshua" partner="Lisza"/>
        <Chat user="Lisza" partner="Joshua"/>
      </div>
    );
  }
}

export default App;
