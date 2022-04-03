import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li><CustomLink to='/'>HOME</CustomLink></li>
                    <li><CustomLink to='/reviews'>REVIEWS</CustomLink></li>
                    <li><CustomLink to='/deshboard'>DESHBOARD</CustomLink></li>
                    <li><CustomLink to='/blogs'>BLOGS</CustomLink></li>
                    <li><CustomLink to='/about'>ABOUT</CustomLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;