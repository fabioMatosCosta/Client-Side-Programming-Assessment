import Axios from 'axios';

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
