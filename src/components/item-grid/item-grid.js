import React, { useEffect, useState } from 'react';
import './item-grid.css';
import Spinner from '../spinner/index';
import ErrorIndicator from '../error-indicator/error-indicator';
import GridElement from '../item-grid-element';

const ItemGrid = (props) => {
    const [countriesFiltered, setCountriesFiltered] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (props.countries) {
            setCountriesFiltered(props.countries)
            setError(false)
            setLoading(false)
        } else {
            onError()
        }
    }, [props.countries])

    useEffect(() => {
        setCountriesFiltered(props.countries.filter(country => country.name.match(props.matchPattern)))
    }, [props.matchPattern])

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