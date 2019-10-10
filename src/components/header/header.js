import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className='navbar-section'>
            <div className='container'>
                <nav className='navbar'>
                    <a href='#' className='navbar-main'>Countries of the world</a>
                    <div>
                        <ul className='navbar-list'>
                            <li className='navbar-item'>
                                <a href="#" className='navbar-link'>Europe</a>
                            </li>
                            <li className='navbar-item'>
                                <a href="#" className='navbar-link'>Asia</a>
                            </li>
                            <li className='navbar-item'>
                                <a href="#" className='navbar-link'>Northern America</a>
                            </li>
                            <li className='navbar-item'>
                                <a href="#" className='navbar-link'>Southern America</a>
                            </li>
                            <li className='navbar-item'>
                                <a href="#" className='navbar-link'>Africa</a>
                            </li>
                            <li className='navbar-item'>
                                <a href="#" className='navbar-link'>Oceania</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header