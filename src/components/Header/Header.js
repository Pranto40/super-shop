import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/'>REVIEWS</Link></li>
                    <li><Link to='/'>DESHBOARD</Link></li>
                    <li><Link to='/'>BLOGS</Link></li>
                    <li><Link to='/'>ABOUT</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;