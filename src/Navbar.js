import React from 'react';
import './App.scss';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
        <div className="cont-navbar">
                <div className='wrapper'>
                        <Link to='/' className='cont-logo'>
                            <img src='./images/logo.png' alt='logo' />
                        </Link>
                        <nav className='cont-menu'>
                            <ul>
                                
                                <li className='bt-login'> <Link to='/admin'>admin</Link> </li>
                            </ul>
                        </nav>
                </div>
            
        </div>
  );
}

export default Navbar;
