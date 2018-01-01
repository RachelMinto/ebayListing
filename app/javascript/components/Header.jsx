import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container container--filled padded--sm header--container">
          <div className="login float--right">
            <button className="padded--sm btn">Login</button>
          </div>
        </div>
      </div>
    );
  }
}