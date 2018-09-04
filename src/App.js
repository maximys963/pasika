import React, { Component } from 'react';
import MainPage from './components/mainPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Art from './components/art';
import Music from './components/music';
import Fashion from './components/fashion'
import AboutUs from './components/aboutUs'
import Contacts from './components/contacts'
import Issues from './components/issues'
import HoneyDew from './components/honeydew'
import Submitting from './components/submitting'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <MainPage/>
            <Switch>
              <Route exact path='/'/>
              <Route path='/art' component={Art}/>
              <Route path='/music' component={Music}/>
              <Route path='/fashion' component={Fashion}/>
              <Route path="/aboutus" component={AboutUs}/>
              <Route path="/contacts" component={Contacts}/>
              <Route path="/issues" component={Issues}/>
              <Route path="/honeydew" component={HoneyDew}/>
              <Route path="/submitting" component={Submitting}/>
            </Switch>
          </div>
        </Router>

    );
  }
}

export default App;


