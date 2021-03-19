import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavbarElements} from './NavbarElements';
import './Navbar.css'
import { Button } from '../Button';

class Navbar extends Component {
  state = { clicked: false }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render(){
    return (
      <nav className="NavbarItems">
        <Link to="/" className='navbar-logo'>
          <h1>Univent</h1>
        </Link>
        <div className='menu-icon' onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {NavbarElements.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
        <Button>Sign up</Button>
      </nav>
    );
  }
}

export default Navbar;
