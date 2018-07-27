import React, { Component } from 'react';
import UserData from '../UserData';
import ActiveUser from '../ActiveUser';
import Modal from '../Modal';
import './UserList.css';

class UserList extends Component {
  state = {
    isShowModal: false,
    activeUser: null,
  }

  showModal = () => {
    this.setState({ isShowModal: true });
  }

  hideModal = () => {
    this.setState({ isShowModal: false });
  }

  handleClick = activeUser => {
    this.showModal();
    this.setState({ activeUser });
  }

  render() {
    if (!this.props.data) {
      return (<p>Loading...</p>);
    }

    const { isShowModal } = this.state;
    const userEl = this.props.data.map((user, index) => {
      return (<li className="user-list__item" key = { user.id }>
          <UserData user = { user }
                    onUserClick = { this.handleClick.bind(this, index) }
          />
        </li>);
      });

    return (
      <div>
        <ul className="user-list">
          { userEl }
        </ul>
        <Modal isOpen = { isShowModal } onHide = { this.hideModal }>
          <ActiveUser data = { this.props.data } active = { this.state.activeUser } />
        </Modal>
      </div>
    )
  }
}

export default UserList;
