/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Place your DOM rendering scripts in /packs directory.
// This folder should only contain scripts which will be rendered using <%= javascript_pack_tag %>.
//
// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// // require ReactDOM;
// import { render } from 'react-dom';
// import BasicExample from '../components/App';
// // import Header from '../components/Header';
//
// document.addEventListener('DOMContentLoaded', () => {
//   const container = document.body.appendChild(document.createElement('div'));
//   render((
//     <BrowserRouter>
//       <BasicExample />
//     </BrowserRouter>
//   ), document.getElementById('root'))
//   // render(<Header/>, container);
//   // render(<LandingPage/>, container);
// });
import React from 'react'
import ReactDOM from 'react-dom'
import Header from "../components/Header";
import Main from "../components/Main";

const App = () => (
  <div>
    {/*<Header />*/}
    <Main />
  </div>
)



// import App from '../components/App';
ReactDOM.render(<App />, document.getElementById('root'));