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
    const imageWidth = $("input#img-width").val();
    let styles = '';

    if (imageWidth) {
      styles = `width: ${imageWidth}; max-width: 100%`
    } else {
      styles = `max-width: 100%`
    }

    const imgHTML = `<div style="text-align: center; margin-top: 20px;">  <img src="${imgURL}" style="${styles}"></div>`

    this.setState({ imageHTML: imgHTML });
  };

  render() {
    return (
      <div className="page">
        <div className="landing-page padded--lg container--contents-centered">
          <h4 className="text--header">
            Ebay Description Image Maker
          </h4>
          <hr/>
          <div className="padded--sm">
            <ol>
              <li>1. Visit a page on the internet that has your image.</li>
              <li>2. Right click on the image and select 'Copy Image Address'</li>
              <li>3. Paste the copied url from your clipboard into the box below</li>
              <li>4. Add the generated HTML to the{' '}
                <a href="https://jsfiddle.net/RachelMinto/w8a7kw2w/">JSFiddle</a>
                {' '}beneath "Add Images Below Here"
              </li>
              <li>5. Paste in the ebay HTML editor using Option+Shift+Command+V</li>
            </ol>
          </div>
          <div className="padded--sm container">
            <form>
              <label>
                Image url
                <input id="img-1" type="text" style={{width: '300px', marginLeft: '20px'}}>
                </input>
              </label>
              <br/>
              <label>
                Image max width (optional)
                <input id="img-width" type="text" style={{width: '300px', marginLeft: '20px'}} placeholder="You can type something like 300px or 400px here.">
                </input>
              </label>
              <br/>
              <button type="submit" onClick={this.generateHTML} style={{marginTop: '20px'}}>Submit</button>
            </form>
          </div>

          <div style={{border: '2px solid #ededed', padding: '4px', width: '1000px'}}>{this.state.imageHTML}</div>
        </div>
      </div>
    );
  }
}