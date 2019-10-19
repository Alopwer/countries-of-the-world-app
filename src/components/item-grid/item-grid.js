import React, { useEffect, useState } from 'react';
import './item-grid.css';
import Spinner from '../spinner/index';
import ErrorIndicator from '../error-indicator/error-indicator';
import GridElement from '../item-grid-element';

const ItemGrid = (props) => {
    const [countries, setCountries] = useState([])
    const [countriesFiltered, setCountriesFiltered] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        props.getData()
            .then(onCountryLoaded)
            .catch(onError)
    }, [])

    useEffect(() => {
        setCountriesFiltered(countries.filter(country => country.name.match(props.matchPattern)))
    }, [props.matchPattern])

    const onCountryLoaded = async (countriesData) => {
        setCountries(countriesData)
        setCountriesFiltered(countriesData)
        setError(false)
        setLoading(false)
    }

    const onError = (error) => {
        setError(true)
        setLoading(false)
    }
    
    const renderItems = (countriesArr) => 
        countriesArr.map(country => 
            (
                <GridElement 
                    country={country} 
                    key={country.name}
                    onCountrySelected={props.onCountrySelected}
                />
            )
        )
        
    const hasData = !(loading || error)
    const items = renderItems(countriesFiltered)
    
    const errorMessage = error ? <ErrorIndicator /> : null
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? items : null

    return (
        <div className='item-grid-section'>
            <div className='container item-grid-block'>
                {spinner || content || errorMessage}
            </div>
        </div>
    )
}

export default ItemGrid