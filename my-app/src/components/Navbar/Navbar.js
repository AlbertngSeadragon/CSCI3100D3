import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import AuthService from "../../services/authService";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if(user) {
      this.setState({
        currentUser: user
      });
    }
  }

  logOut() {
    if(window.confirm("You will be logged out")){
      AuthService.logout();
      window.location.reload();
    }
  }

  state = { clicked: false }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render(){
    const { currentUser } = this.state;
    
    return (
      <nav className="NavbarItems" id="NavbarItems">
        <Link to="/" className='navbar-logo' id='navbar-logo'>
          <h1>Univent</h1>
        </Link>
        <div className='menu-icon' onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        {currentUser ? (
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          <li><a className="nav-links" href="/About">About</a></li>
          <li><a className="nav-links" href="/Profile">Profile</a></li>
          <li><a className="nav-links" href="/EventsList">Events</a></li>
          <li><a className="nav-links" href="/CreateEvent">Create event</a></li>
          <li><a className="nav-links-mobile" href="/" onClick={this.logOut}>Log Out</a></li>
        </ul>) : 
        (<ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          <li><a className="nav-links" href="/About">About</a></li>
          <li><a className="nav-links" href="/EventsList">Events</a></li>
          <li><a className="nav-links-mobile" href="/Signup">Sign up</a></li>
        </ul>)}
        {currentUser ? (
          <Link to="/">
            <button className="btn" id="button" onClick={this.logOut}>Log Out</button>
          </Link>) : 
          (<Link to="/Signup">
            <button className="btn" id="button">Sign in</button>
          </Link>
        )}
      </nav>
    );
  }
}

export default Navbar;
