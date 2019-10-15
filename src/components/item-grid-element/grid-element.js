import React from 'react';
import './grid-element.css';

class GridElement extends React.Component {
    render() {
        const { country } = this.props
        return (
            <div className='item-grid-element' onClick={() => this.props.onCountrySelected(country.name)}>
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
            </div>
        )
    }
}

export default GridElement;