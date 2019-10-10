export default class CountryService {
    _apiBase = 'https://restcountries.eu/rest/v2';

    async getResource() {
        const res = await fetch(`${this._apiBase}/all`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}, received ${res.status}`);
        }
        return await res.json();
    }

    async searchByName(value) {
        const res = await fetch(`${this._apiBase}/name/${value}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}, received ${res.status}`);
        }
        return await res.json();
    }

    async searchByCapital(value) {
        const res = await fetch(`${this._apiBase}/capital/${value}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}, received ${res.status}`);
        }
        return await res.json();
    }

    async searchByRegion(value) {
        const res = await fetch(`${this._apiBase}/region/${value}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}, received ${res.status}`);
        }
        return await res.json();
    }
}

// const hsapi = new CountryService()
// const array = [hsapi.getResource(), hsapi.searchByName('MOLDOVA'), hsapi.searchByCapital('chisinau'), hsapi.searchByRegion('europe')]
// Promise.all(array).then(values => console.log(values))