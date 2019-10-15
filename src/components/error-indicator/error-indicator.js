import React from 'react';
import icon from './error-icon.png';
import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className='error-block'>
            <img src={icon} className='error-icon' alt='error-icon' />
            <span className='error-comment'>Sorry, something went wrong</span>
        </div>
    )
}

export default ErrorIndicator;