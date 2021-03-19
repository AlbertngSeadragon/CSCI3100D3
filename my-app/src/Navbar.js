import React from 'react';
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

const Nav = () => {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/' style={navStyle}>
                        <h3>Logo</h3>
                    </Link>
                    <button className='nav-toggle'><FaBars/></button>
                </div>    
                <div className='links-container show-container'>
                    <ul className='nav-links'>
                        <Link to="/About" style={navStyle}>
                            <li>About</li>
                        </Link>
                        <Link to="/Profile" style={navStyle}>
                            <li> Profile</li>
                        </Link>
                    </ul>
                </div>    
            </div>    
        </nav>
    );
  }
  
  export default Nav;