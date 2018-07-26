import React, { Component } from 'react';
import UserList from '../UserList';
import users from '../../fixtures';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="content">
        <UserList data = { users } />
      </div>
    )
  }
};

export default App;
