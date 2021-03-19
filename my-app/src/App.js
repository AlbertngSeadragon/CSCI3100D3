import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute";
import Profile from './components/Profile';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About';
import Signup from './components/signup';
import Event from './components/Events'

class App extends Component {
  render(){  
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/About" exact component={About} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/Events" exact component={Event} />
            <PrivateRoute path="/Profile" exact component={Profile}/>
          </Switch>  
        </div>
      </Router>
    );
  }  
}

export default App;
