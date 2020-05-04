import Axios from 'axios';
var _ = require('lodash');

const axios = Axios.create({
    baseURL: `http://localhost:5000/`,
    headers: {'content-type': 'application/json'}
})

export const breweries = () => {
    return axios({
        method:'GET',
        url: 'beers/breweries'
    })
}

export const setBreweries = (breweries) => {
    window.localStorage.setItem('breweries', JSON.stringify(breweries));
}

export const getBreweries = () => {
    return JSON.parse(window.localStorage.getItem('breweries'));
}

export const getBeers = (id) => {
    return axios({
        method:'GET',
        url: `beers/breweries/${id}`
    })
}

export const locations = () => {
    return axios({
        method:'GET',
        url: 'beers/locations'
    })
}

export const setLocations = (locations) => {
    window.localStorage.setItem('locations', JSON.stringify(locations));
}

export const getLocations = () => {
    return JSON.parse(window.localStorage.getItem('locations'));
}

export const getCountries = () => {
    let locationsObj = _.uniqBy(getLocations(), 'countryIsoCode');
    let countries = [];
    locationsObj.forEach(element => countries.push(element.countryIsoCode))
    return countries
}