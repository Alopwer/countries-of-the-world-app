import React, { useState, useEffect } from 'react';
import './search-bar.css';

const SearchBar = ({ matchCountries }) => {
    const [value, setValue] = useState('')

    const onChangeValue = (value) => {
        setValue(value)
    }

    useEffect(() => {
        matchCountries(value)
    }, [value])

    return (
        <div className='search-bar-section'>
            <div className='container'>
                <h2 className='search-bar-title'>Search for a country</h2>
                <input 
                    className='search-bar' 
                    placeholder='What country are you looking for?'
                    value={value}
                    onChange={(e) => onChangeValue(e.target.value)}
                />
            </div>
        </div>
    )
}

export default SearchBar