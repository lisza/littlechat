import React, { Component } from 'react';
import './App.css';
import Chat from './components/Chat';

class App extends Component {
  // In order to mock two users, pass hardcoded users
  // as props to Chat component
  
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
