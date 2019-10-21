import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './grid-element.css';

const GridElement = (props) => {
    const { country } = props
    return (
        <Link to={`/${country.alpha3Code}`} className='item-grid-element'>
                <div className='element-head'>
                    <span className='element-name'>{country.name}</span>
                    <i className="fa fa-info-circle"></i>
                </div>
                <div className='element-body'>
                    <span className='element-title'>Capital</span>
                    <span className='element-value'>{country.capital}</span>
                </div>
                <div className='element-body'>
                    <span className='element-title'>Population</span>
                    <span className='element-value'>{country.population}</span>
                </div>
                <div className='element-body'>
                    <span className='element-title'>Region</span>
                    <span className='element-value'>{country.region}</span>
                </div>
        </Link>
    )
}

export default GridElement;