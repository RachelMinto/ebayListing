import React from 'react';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="landing-page padded--lg container--contents-centered">
          <h1 className="text--header landing-page--title">
            Clausmology
          </h1>
          <hr></hr>
          <div className="padded--sm">Randomized characters and log lines
          </div>
          <div className="padded--lg container">
            <div className="container--opaque">
              Create a free account to make your own.
            </div>
          </div>
        </div>
      </div>
    );
  }
}