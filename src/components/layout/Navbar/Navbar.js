import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import './navbar.css'
import SearchForm from '../../home/SearchForm'
import Main from '../../home/Main';

function Navbar() {
    return (
        <div>
            <nav className="navbar mb-5">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand text-white text-lg brand-text" href='/Movies-Series'>
                            <img width="50px" src={logo} alt="" />
                            <span className="navbar-brand-name">MamsON TV</span>
                        </a>
                        
                    </div>
                    <SearchForm />
                    <ul className="navbar-nav text-light d-inline-block">
                        <li className="nav-item d-inline-block mr-4">
                            <Link to="/signin">Sign In</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-4">
                            <Link to="/signup">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;