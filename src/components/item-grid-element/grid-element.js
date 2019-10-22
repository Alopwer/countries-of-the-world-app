import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './grid-element.css';
import InfoCircle from '../svg/info-circle';

const GridElement = (props) => {
    const { country } = props
    const { alpha3Code : code } = country
    return (
        <Link to={`/${code.toLowerCase()}`} className='item-grid-element'>
                <div className='element-head'>
                    <span className='element-name'>{country.name}</span>
                    <InfoCircle />
                </div>
                <div className='element-body'>
                    <span className='element-title'>Capital</span>
                    <span className='element-value'>{country.capital || '-'}</span>
                </div>
                <div className='element-body'>
                    <span className='element-title'>Population</span>
                    <span className='element-value'>{country.population || '-'}</span>
                </div>
                <div className='element-body'>
                    <span className='element-title'>Region</span>
                    <span className='element-value'>{country.region || '-'}</span>
                </div>
        </Link>
    )
}

export default GridElement;