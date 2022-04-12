import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    } ,[]);

    const handleLogOut = () => {
        signOut(auth).then(() => {

          }).catch((error) => {

        });
    }

    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li><CustomLink to='/'>HOME</CustomLink></li>
                    <li><CustomLink to='/reviews'>REVIEWS</CustomLink></li>
                    <li><CustomLink to='/deshboard'>DESHBOARD</CustomLink></li>
                    <li><CustomLink to='/blogs'>BLOGS</CustomLink></li>
                    <li><CustomLink to='/about'>ABOUT</CustomLink></li>
                    { user?.uid ? <Link to='' className='logOut' onClick={handleLogOut}>Logout</Link> : <li><CustomLink to='/login'>LOGIN</CustomLink></li> }
                </ul>
            </nav>
        </header>
    );
};

export default Header;