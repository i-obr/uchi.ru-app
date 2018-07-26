import React from 'react';
import './UserData.css';

export default ({ user, onUserClick }) => {
  return (
    <div onClick = { onUserClick } className="user">
      <img className="user__image" src={ user.image } alt="" />
      <h2 className="user__name">{ user.name }</h2>
      <span className="user__phone">{ user.phone }</span>
    </div>
  )
}
