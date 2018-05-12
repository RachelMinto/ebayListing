import React from 'react';
import $ from 'jquery';

export default class LandingPage extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      imageHTML: 'Your HTML will be here.',
    };

    this.generateHTML = this.generateHTML.bind(this);

  }

  generateHTML = (e) => {
    e.preventDefault();
    const imgURL = $("input#img-1").val();
    const imgHTML = `<div style="text-align: center; margin-top: 20px;">  <img src="${imgURL}"></div>`

    this.setState({ imageHTML: imgHTML });
  };

  render() {
    return (
      <div className="page">
        <div className="landing-page padded--lg container--contents-centered">
          <h4 className="text--header">
            Ebay Description Image Maker
          </h4>
          <hr></hr>
          <div className="padded--sm">
            <ol>
              <li>1. Visit a page on the internet that has your image.</li>
              <li>2. Right click on the image and select 'Copy Image Address'</li>
              <li>3. Paste the copied url from your clipboard into the box below</li>
            </ol>
          </div>
          <div className="padded--sm container">
            <form>
              <label>
                Image url
                <input id="img-1" type="text" style={{width: '300px'}}>
                </input>
              </label>
              <button type="submit" onClick={this.generateHTML}>Submit</button>
            </form>
          </div>

          <div>{this.state.imageHTML}</div>
        </div>
      </div>
    );
  }
}