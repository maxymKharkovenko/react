import React, {Component} from 'react';
import './App.css';
import Header from './components/header'
import contactPage from './pages/contactPage'
import homePage from './pages/homePage'

import {Router, Route, Redirect} from 'react-router'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

class App extends Component {

  render() {

    /*const commonHome = (props) => {
      return (
        <Contacts data={this.state.list} options={this.options} state={this.state} />
      );
    };*/

    return (
      <Router history={ history }>
        <div>
          <Route path="/" component={Header}/>
          <Route path="/contacts" component={contactPage}/>
          <Route path="/home" component={homePage}/>
          <Redirect from="/" to="contacts"/>
        </div>
      </Router>
    );
  }
}

export default App;
