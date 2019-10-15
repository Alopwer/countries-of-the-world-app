import React from 'react';
import './item-details.css';
import CountryService from '../../services/country-service';

class ItemDetails extends React.Component {

    countryService = new CountryService();

    state = {
        country: null
    }

    componentDidMount() {
        this.updateCountry()
    }

    componentDidUpdate(prevProps) {
        if (this.props.countryId !== prevProps.countryId) {
            this.updateCountry();
        }
    }

    updateCountry() {
        const { countryId } = this.props
        if (!countryId) {
            return;
        }

        this.countryService
            .getByName(countryId)
            .then((country) => {
                this.setState({
                    country
                })
            })
    }

    render() {
        if (!this.state.country) return (<p>No country</p>)
        const { name, nativeName, area, capital, population, region, subregion } = this.state.country;
        return (
            <div className='item-details-section'>
                <div className='container'>
                    <h2 className='item-main-title'>{name}</h2>
                    <div className='item-details'>

                        <div className='item-block'>
                            <h3 className='item-heading'>Main Info</h3>
                            <div className='item-info'>
                                <div className='item-info-row'>
                                    <span className='item-info-name'>Official name</span>
                                    <span className='item-info-value'>{name}</span>
                                </div>
                                <div className='item-info-row'>
                                    <span className='item-info-name'>Native name</span>
                                    <span className='item-info-value'>{nativeName}</span>
                                </div>
                                <div className='item-info-row'>
                                    <span className='item-info-name'>Capital</span>
                                    <span className='item-info-value'>{capital}</span>
                                </div>
                                <div className='item-info-row'>
                                    <span className='item-info-name'>Area</span>
                                    <span className='item-info-value'>{area}</span>
                                </div>
                                <div className='item-info-row'>
                                    <span className='item-info-name'>Population</span>
                                    <span className='item-info-value'>{population}</span>
                                </div>
                                <div className='item-info-row'>
                                    <span className='item-info-name'>Region</span>
                                    <span className='item-info-value'>{region}</span>
                                </div>
                                <div className='item-info-row'>
                                    <span className='item-info-name'>Subregion</span>
                                    <span className='item-info-value'>{subregion}</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemDetails