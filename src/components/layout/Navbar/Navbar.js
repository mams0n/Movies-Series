import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import './navbar.css'
import SearchForm from '../../home/SearchForm'

function Navbar() {
    return (
        <div>
            <nav className="navbar mb-5">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand text-white text-lg brand-text" to="/">
                            <img width="50px" src={logo} alt="" />
                            <span className="navbar-brand-name">MamsON TV</span>
                        </Link>
                        
                    </div>
                    <SearchForm />
                    <ul className="navbar-nav text-light d-inline-block">
                        <li className="nav-item d-inline-block mr-4">
                            <i className="fab fa-imdb fa-5x" id="imdb-logo" />
                        </li>
                        <li className="nav-item d-inline-block mr-4">
                            <i className="fab fa-react fa-5x" id="react-logo" />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;