import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import CountryService from './services/country-service';

function Index() {
  return (
    <div className="App">
      <App/>
    </div>
  );
}

const hsapi = new CountryService()
const array = [hsapi.getResource(), hsapi.searchByName('MOLDOVA'), hsapi.searchByCapital('chisinau'), hsapi.searchByRegion('europe')]
Promise.all(array).then(values => {
  console.log(values)
})

ReactDOM.render(<Index />, document.getElementById('root'))
