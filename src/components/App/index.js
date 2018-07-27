import React, { Component } from 'react';
import UserList from '../UserList';
import './App.css';

const API = 'http://localhost:3001/users'

class App extends Component {
  state = {
    users: null,
    error: '',
  }

  componentDidMount() {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        this.setState({
          users: data,
        });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { users, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <div className="content">
        <UserList data = { users } />
      </div>
    )
  }
};

export default App;
