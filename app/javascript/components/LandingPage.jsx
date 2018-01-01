import React from 'react';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="landing-page padded--lg">
          <h1 className="text--header landing-page--title">
            Clausmology
          </h1>
          <hr></hr>
          <div className="centered">Randomized characters and log lines</div>
        </div>
      </div>
    );
  }
}