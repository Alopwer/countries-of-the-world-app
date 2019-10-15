import React from 'react';
import './search-bar.css';

class SearchBar extends React.Component {
    state = {
        value : ''
    }

    onChangeValue(value) {
        this.setState({
            value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value !== this.state.value) {
            this.props.matchCountries(this.state.value)
        }
    }

    render() {
        return (
            <div className='search-bar-section'>
                <div className='container'>
                    <h2 className='search-bar-title'>Search for a country</h2>
                    <input 
                        className='search-bar' 
                        placeholder='What country are you looking for?'
                        value={this.state.value}
                        onChange={(e) => this.onChangeValue(e.target.value)}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBar