import React from 'react';
import './active-user.css';

export default ({ data, active }) => {
  if (!data || !data[active]) {
    return <h2>Nothing found :(</h2>;
  }

  const user = data[active];

  return (
    <div className="active-user">
      <img className="active-user__image" src={ user.image } alt=""/>
      <h2>{ user.name }</h2>
      <table>
        <tbody>
          <tr>
            <td>Phone Number:</td>
            <td>
              <a href={ `tel:${user.phone}` }>{ user.phone }</a>
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <a href={ `mailto:${user.email}` }>{ user.email }</a>
            </td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>
              <span>{ user.country }</span>
            </td>
          </tr>
        </tbody>
      </table>
      <p>{ user.description }</p>
    </div>
  )
}
