import React, { Component } from 'react';
import UserList from '../UserList';
import Filter from '../Filter';
import './App.css';

const API = 'http://localhost:3001/users'

class App extends Component {
  state = {
    users: null,
    error: '',
    sorted: {
      name: true,
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(data => {
        this.initialUsers = data;
        this.setState({
          users: this.initialUsers,
        });
      })
      .catch(error => this.setState({ error }));
  };

  sort(type) {
    const data = this.state.users;
    const isSorted = this.state.sorted;
    let direction = isSorted ? 1 : -1;

    const sorted = Array.from(data).sort((a, b) => {
      if (a[type] === b[type]) { return 0; }
      return a[type] > b[type] ? direction : direction * -1;
    });

    this.setState({
      users: sorted,
      sorted: {
        [type]: !isSorted
      }
    });
  };

  reset() {
    this.setState({ users: this.initialUsers });
  }

  handleClick = (e) => {
    const type = e.target.getAttribute('data-type');
    switch (type) {
      case 'name':
        this.sort(type);
        break;
      case 'reset':
        this.reset();
        break;
      default:
        console.log('No type');
    }
  };

  render() {
    const { users, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <div className="content">
        <Filter onSortedClick = { this.handleClick } />
        <UserList data = { users } />
      </div>
    )
  };
};

export default App;
