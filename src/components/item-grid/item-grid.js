import React from 'react';
import './item-grid.css';
import CountryService from '../../services/country-service';
import Spinner from '../spinner/index';
import ErrorIndicator from '../error-indicator/error-indicator';
import GridElement from '../item-grid-element';

class ItemGrid extends React.Component {

    countryService = new CountryService();

    state = {
        countries: [],
        loading: true,
        error: false
    }
    
    componentDidMount() {
        const { getData } = this.props;
        getData()
            .then(this.onCountryLoaded)
            .catch(this.onError)
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.updateCountries(this.props.matchPattern);
        }
    }

    updateCountries = (matchValue = '') => {
        const changeState = this.state.countries.filter(country => country.name.match(matchValue))
        console.log(changeState)
        this.setState({
            countries : changeState
        })
    }

    onCountryLoaded = (countries) => {
        this.setState({ 
            countries,
            loading: false,
            error: false 
         })
    }

    onError = (error) => {
        this.setState({
            error: true,
            loading: false
        })
    }
    
    renderItems(countriesArr) {
        return countriesArr.map((country, i) => {
            return (
                <GridElement 
                    country={country} 
                    key={i}
                    onCountrySelected={this.props.onCountrySelected}
                />
            )
        })
    }

    render() {

        const { countries, loading, error } = this.state;

        const hasData = !(loading || error)
        const items = this.renderItems(countries)

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
}

export default ItemGrid