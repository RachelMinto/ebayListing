import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container--filled container--padded">
          <div className="login">
            <button>Login!</button>
          </div>
        </div>
      </div>
    );
  }
}