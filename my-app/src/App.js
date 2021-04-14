import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { PrivateRoute } from "./components/PrivateRoute";
import Profile from './components/pages/Profile';
import Navbar from './components/Navbar/Navbar';
import About from './components/pages/About';
import EventsList from './components/Event/EventsList';
import CreateEvent from "./components/Event/EventsInsert";
import Signup from './components/Registration';
import Home from './components/pages/Home';
import Footer from './components/Navbar/Footer';


class App extends Component {
  render(){  
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/Signup" exact component={Signup} />
            <Route path="/EventsList" exact component={EventsList} />
            <Route exact path="/EventsList/:type" component={EventsList} />
            <PrivateRoute path="/CreateEvent" exact component={CreateEvent} />
            <PrivateRoute path="/Profile" exact component={Profile}/>
          </Switch> 
          <Footer /> 
        </div>
      </Router>
    );
  }  
}

export default App;
