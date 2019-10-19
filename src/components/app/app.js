import React, { useState } from 'react';
import './app.css';

import Header from '../header/header';
import ItemDetails from '../item-details/item-details';
import ItemGrid from '../item-grid/item-grid';
import SearchBar from '../search-bar/search-bar';
import SwapiService from '../../services/country-service';

const App = () => {
    const swapiService = new SwapiService();
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [lookingPattern, setLookingPattern] = useState('')

    const onCountrySelected = (name) => {
        setSelectedCountry(name)
    }

    const matchCountries = (pattern) => {
        const regExp = new RegExp('^' + pattern, 'i')
        setLookingPattern(regExp)
        console.log(regExp)
    }

    return (
        <div>
            <Header/>
            <SearchBar matchCountries={matchCountries}/>
            <ItemGrid 
                onCountrySelected={onCountrySelected}
                getData={swapiService.getResource}
                matchPattern={lookingPattern}
            />
            <ItemDetails countryName={selectedCountry}/>
        </div>
    )
}

export default App