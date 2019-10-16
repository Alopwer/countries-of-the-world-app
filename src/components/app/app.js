import React from 'react';
import './app.css';

import Header from '../header/header';
import ItemDetails from '../item-details/item-details';
import ItemGrid from '../item-grid/item-grid';
import SearchBar from '../search-bar/search-bar';
import SwapiService from '../../services/country-service';

class App extends React.Component {

    swapiService = new SwapiService();

    state = {
        selectedCountry: null,
        lookingFor: ''
    }

    onCountrySelected = (name) => {
        this.setState({
            selectedCountry : name
        })
    }

    matchCountries = (pattern) => {
        if (pattern) {
            pattern = pattern[0].toUpperCase() + pattern.slice(1)
            
        }
        this.setState({
            lookingFor : pattern
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <SearchBar matchCountries={this.matchCountries}/>
                <ItemGrid 
                    onCountrySelected={this.onCountrySelected}
                    getData={this.swapiService.getResource}
                    matchPattern={this.state.lookingFor}
                />
                <ItemDetails countryName={this.state.selectedCountry}/>
            </div>
        )
    }
}

export default App