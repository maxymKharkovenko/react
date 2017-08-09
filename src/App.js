import React, {Component} from 'react';
import './App.css';
import Header from './components/header'
import contactPage from './pages/contactPage'

import {Router, Route} from 'react-router'
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
        </div>
      </Router>
    );
  }
}

export default App;
