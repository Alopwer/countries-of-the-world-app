import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className='navbar-section'>
            <div className='container'>
                <nav className='navbar'>
                    <Link to='/' className='navbar-main'>Countries of the world</Link>
                    <Link to='/about' className='navbar-text'>About</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header