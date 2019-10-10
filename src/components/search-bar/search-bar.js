import React from 'react';
import './search-bar.css';

const SearchBar = () => {
    return (
        <div className='search-bar-section'>
            <div className='container'>
                <h2 className='search-bar-title'>Search for a country</h2>
                <input className='search-bar' placeholder='What country are you looking for?'/>
            </div>
        </div>
    )
}

export default SearchBar