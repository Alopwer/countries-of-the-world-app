import React, { useState, useEffect } from 'react';
import './item-details.css';
import CountryService from '../../services/country-service';
import Spinner from '../spinner';
import Accordion from '../item-details-dropdown';

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
        <React.Fragment>
            {country ? <ItemView country={country}/> : <Spinner />}
        </React.Fragment>
    )
}

const ItemView = ({ country }) => {
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
                                <p className='item-info-name'>Official Name</p>
                                <p className='item-info-value'>{country.name || '-'}</p>
                            </div>
                            <div className='item-info-row'>
                                <p className='item-info-name'>Common Name</p>
                                <p className='item-info-value'>{country.nativeName || '-'}</p>
                            </div>
                            <div className='item-info-row'>
                                <p className='item-info-name'>Alternative Spellings</p>
                                <p className='item-info-value'>{country.altSpellings.join(', ') || '-'}</p>
                            </div>
                            <Accordion title='Translations' value={country.translations || '-'}/>
                        </div>
                    </div>

                    <div className='item-image-block' id='image-block'>
                        <img className='item-image' src={country.flag} />
                    </div>

                    <div className='item-block' id='codes-block'>
                        <h3 className='item-heading'>Codes</h3>
                        <div className='item-info'>
                            <div className='item-info-row'>
                                <p className='item-info-name'>ISO 3166-1 alpha-2</p>
                                <p className='item-info-value'>{country.alpha2Code || '-'}</p>
                            </div>
                            <div className='item-info-row'>
                                <p className='item-info-name'>ISO 3166-1 alpha-3</p>
                                <p className='item-info-value'>{country.alpha3Code || '-'}</p>
                            </div>
                            <div className='item-info-row'>
                                <p className='item-info-name'>ISO 3166-1 numeric</p>
                                <p className='item-info-value'>{country.numericCode || '-'}</p>
                            </div>
                            <div className='item-info-row'>
                                <p className='item-info-name'>International calling code</p>
                                <p className='item-info-value'>{country.callingCodes || '-'}</p>
                            </div>
                            <div className='item-info-row'>
                                <p className='item-info-name'>Top level domain</p>
                                <p className='item-info-value'>{country.topLevelDomain || '-'}</p>
                            </div>
                        </div>
                    </div>

                    <div className='item-block' id='geography-block'>
                        <h3 className='item-heading'>Geography</h3>
                        <div className='item-info'>
                            <div className='item-info-row'>
                                <p className='item-info-name'>Region</p>
                                <p className='item-info-value'>{country.region || '-'}</p>
                            </div>
                            <div className='item-info-row'>
                                <p className='item-info-name'>Subregion</p>
                                <p className='item-info-value'>{country.subregion || '-'}</p>
                            </div>
                            <div className='item-info-row'>
                                <p className='item-info-name'>Capital</p>
                                <p className='item-info-value'>{country.capital || '-'}</p>
                            </div>
                            <div className='item-info-row'>
                                <p className='item-info-name'>Demonym</p>
                                <p className='item-info-value'>{country.demonym || '-'}</p>
                            </div>
                            <div className='item-info-row'>
                                <p className='item-info-name'>Lat/Lng</p>
                                <p className='item-info-value'>{country.latlng.map(el => el.toFixed(2)).join(' / ')}</p>
                            </div>
                            <div className='item-info-row'>
                                <p className='item-info-name'>Area</p>
                                <p className='item-info-value'>{country.area || '-'}</p>
                            </div>
                            <div className='item-info-row'>
                                <p className='item-info-name'>Borders</p>
                                <p className='item-info-value'>{country.borders.join(', ') || '-'}</p>
                            </div>
                        </div>
                    </div>

                    <div className='item-block' id='language-block'>
                        <h3 className='item-heading'>Language</h3>
                        <div className='item-info'>
                            <div className='item-info-row'>
                                <p className='item-info-name'>Native Language</p>
                                <p className='item-info-value'>{country.languages[0].name || '-'}</p>
                            </div>
                            <div className='item-info-row'>
                                <p className='item-info-name'>Languages</p>
                                <p className='item-info-value'>{Object.values(...country.languages) || '-'}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ItemDetails