import React, { useState, useEffect } from 'react';
import './item-details.css';
import CountryService from '../../services/country-service';

const ItemDetails = (props) => {
    const countryService = new CountryService();
    const [country, setCountry] = useState('');
    const { countryName } = props

    useEffect(() => {
        updateCountry()
    }, [countryName])

    const updateCountry = () => {
        countryService
            .getByName(countryName)
            .then((country) => {
                setCountry(country)
            })
    }

    return (
        <ItemView country={country}/>
    )
}

const ItemView = ({ country }) => {
    return (
        <div className='item-details-section'>
            <div className='container'>
                <h2 className='item-main-title'>{country.name}</h2>
                <div className='item-details'>

                    <div className='item-block'>
                        <h3 className='item-heading'>Main Info</h3>
                        <div className='item-info'>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Official name</span>
                                <span className='item-info-value'>{country.name}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Native name</span>
                                <span className='item-info-value'>{country.nativeName}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Capital</span>
                                <span className='item-info-value'>{country.capital}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Area</span>
                                <span className='item-info-value'>{country.area}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Population</span>
                                <span className='item-info-value'>{country.population}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Region</span>
                                <span className='item-info-value'>{country.region}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Subregion</span>
                                <span className='item-info-value'>{country.subregion}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ItemDetails