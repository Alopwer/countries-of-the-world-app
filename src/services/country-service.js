export default class CountryService {
    _apiBase = 'https://restcountries.eu/rest/v2';

    getResource = async (filter = 'all', value = '') => {
        const res = await fetch(`${this._apiBase}/${filter}${value}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}, received ${res.status}`);
        }
        return await res.json();
    }

    async getByName(value) {
        const country = await this.getResource('alpha/', value)
        return this._transformCountryElement(country)
    }

    async getByCapital(value) {
        const country = await this.getResource('capital/', value)
        return this._transformCountryElement(country)
    }

    async getByRegion(value) {
        const country = await this.getResource('region/', value)
        return this._transformCountryElement(country)
    }

    // _transformCountry = (country) => {
    //     const [countryObj] = [...country]
    //     return {
    //         id: countryObj.numericCode,
    //         country : countryObj.name,
    //         capital : countryObj.capital,
    //         population: countryObj.population,
    //         region: countryObj.region,
    //     }
    // }

    _transformCountryElement = (country) => {
        return country
    }
}