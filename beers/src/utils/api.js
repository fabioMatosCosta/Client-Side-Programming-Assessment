import Axios from 'axios';

// import qs from 'qs';
// const KEY = process.env.KEY;
// const URLCORS = process.env.URLCORS

//http://api.brewerydb.com/v2/{endpoint}/?key=KEY

// const axios = Axios.create({
//     baseURL: `https://sandbox-api.brewerydb.com/v2/`,
//     params: {
//         key: KEY
//         },
//     headers: {'content-type': 'application/json'}
// })

const axios = Axios.create({
    baseURL: `http://localhost:3001/`,
    headers: {'content-type': 'application/json'}
})


export const beerList = () => {
    return axios({
        method:'GET',
        url: 'beers'
    })
}
export const setBeers = (beerList) => {
    window.localStorage.setItem('beerList', JSON.stringify(beerList));
}

export const getBeers = () => {
    return JSON.parse(window.localStorage.getItem('beerList'));
}

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
