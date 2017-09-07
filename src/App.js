import React, {Component} from 'react';
import './App.css';
import Header from './components/header'
import contactPage from './pages/contactPage'
import homePage from './pages/homePage'
import geolocationPage from './pages/geolocationPage'

import {Router, Route, Redirect} from 'react-router'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <Router history={ history }>
        <div>
          <Route path="/" component={Header}/>
          <Route path="/contacts" component={contactPage}/>
          <Route path="/home" component={homePage}/>
          <Route path="/geo" component={geolocationPage}/>
          <Redirect from="/" to="contacts"/>
        </div>
      </Router>
    );
  }
}

export default App;
