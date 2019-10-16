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
        if (this.props.countryName !== prevProps.countryName) {
            this.updateCountry();
        }
    }

    updateCountry() {
        const { countryName } = this.props
        if (!countryName) {
            return
        }

        this.countryService
            .getByName(countryName)
            .then((country) => {
                this.setState({
                    country
                })
            })
    }

    render() {
        if (!this.state.country) return (<p>No country</p>)
        return (
            <ItemView country={this.state.country}/>
        )
    }
}

const ItemView = ({country}) => {
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