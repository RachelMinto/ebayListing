
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      {/*<Route path='/roster' component={Roster}/>*/}
      {/*<Route path='/schedule' component={Schedule}/>*/}
    </Switch>
  </BrowserRouter>
)

export default Main