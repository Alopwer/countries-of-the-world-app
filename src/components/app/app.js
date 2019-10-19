import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import './app.css'
import Header from '../header/index'
import ItemDetails from '../item-details/index'
import ItemGrid from '../item-grid/index'
import SearchBar from '../search-bar/index'
import About from '../about/about'
import CountryService from '../../services/country-service'
import { CountryContext } from '../country-context/country-context'
import Spinner from '../spinner/index'

const App = () => {
  const countryService = new CountryService()

  const [countries, setCountries] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState('')

  const [code, setCode] = useState(null)
  const [lookingPattern, setLookingPattern] = useState('')

  useEffect(() => {
    countryService.getResource()
      .then((data) => {
        setCountries(data)
      })
      .catch(() => setCountries(null))
  }, [])

  const onCountrySelected = (countryName, countryCode) => {
    setSelectedCountry(countryName)
    setCode(countryCode)
  }

  const matchCountries = (pattern) => {
    const regExp = new RegExp(`^${pattern}`, 'i')
    setLookingPattern(regExp)
  }

  const ItemDetailsRouter = withRouter(ItemDetails)
  const grid = countries ? <ItemGrid matchPattern={lookingPattern} countries={countries} /> : <Spinner />

  return (
    <React.Fragment>
      <Router>
        <Header />
        <Route exact path="/">
          <SearchBar matchCountries={matchCountries} />
          <CountryContext.Provider value={onCountrySelected}>
            {grid}
          </CountryContext.Provider>
        </Route>
        <Route exact path={`/${code}`}>
          <ItemDetailsRouter countryName={selectedCountry} />
        </Route>
        <Route path="/about" component={About} />
      </Router>
    </React.Fragment>
  )
}

export default App
