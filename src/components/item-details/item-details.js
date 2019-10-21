import React, { useState, useEffect } from 'react';
import './item-details.css';
import CountryService from '../../services/country-service';
import Spinner from '../spinner';

const ItemDetails = (props) => {
    const countryService = new CountryService();
    const [country, setCountry] = useState('');
    const code = props.match.params.code;
    
    useEffect(() => {
        if (props.isLoaded) {
          updateCountry();
        }
      }, []);

    const updateCountry = () => {
        countryService
            .getByCode(code.toLowerCase())
            .then((country) => {
                setCountry(country)
            })
    }

    return (
        <ItemView country={country}/>
    )
}

const ItemView = ({ country }) => {
    if (!country) return <Spinner />
    return (
        <div className='item-details-section'>
            {console.log(country)}
            <div className='container'>
                <h2 className='item-main-title'>{country.name}</h2>
                <div className='item-details'>

                    <div className='item-block' id='names-block'>
                        <h3 className='item-heading'>Names</h3>
                        <div className='item-info'>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Official Name</span>
                                <span className='item-info-value'>{country.name}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Common Name</span>
                                <span className='item-info-value'>{country.nativeName}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Alternative Spellings</span>
                                <span className='item-info-value'>{country.altSpellings.join(', ')}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Translations</span>
                                <span className='item-info-value'>{Object.values(country.translations)}</span>
                            </div>
                        </div>
                    </div>

                    <div className='item-image-block' id='image-block'>
                        <img className='item-image' src={country.flag} />
                    </div>

                    <div className='item-block' id='codes-block'>
                        <h3 className='item-heading'>Codes</h3>
                        <div className='item-info'>
                            <div className='item-info-row'>
                                <span className='item-info-name'>ISO 3166-1 alpha-2</span>
                                <span className='item-info-value'>{country.alpha2Code}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>ISO 3166-1 alpha-3</span>
                                <span className='item-info-value'>{country.alpha3Code}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>ISO 3166-1 numeric</span>
                                <span className='item-info-value'>{country.numericCode}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>International calling code</span>
                                <span className='item-info-value'>{country.callingCodes}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Top level domain</span>
                                <span className='item-info-value'>{country.topLevelDomain}</span>
                            </div>
                        </div>
                    </div>

                    <div className='item-block' id='geography-block'>
                        <h3 className='item-heading'>Geography</h3>
                        <div className='item-info'>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Region</span>
                                <span className='item-info-value'>{country.region}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Subregion</span>
                                <span className='item-info-value'>{country.subregion}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Capital</span>
                                <span className='item-info-value'>{country.capital}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Demonym</span>
                                <span className='item-info-value'>{country.demonym}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Lat/Lng</span>
                                <span className='item-info-value'>{country.latlng}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Area</span>
                                <span className='item-info-value'>{country.area}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Borders</span>
                                <span className='item-info-value'>{country.borders}</span>
                            </div>
                        </div>
                    </div>

                    <div className='item-block' id='language-block'>
                        <h3 className='item-heading'>Language</h3>
                        <div className='item-info'>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Native Language</span>
                                <span className='item-info-value'>{Object.values(country.languages[0])}</span>
                            </div>
                            <div className='item-info-row'>
                                <span className='item-info-name'>Languages</span>
                                <span className='item-info-value'>{Object.values(...country.languages)}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ItemDetails