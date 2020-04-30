import Axios from 'axios';
import qs from 'qs';
const KEY = process.env.KEY;
const URLCORS = process.env.URLCORS

//http://api.brewerydb.com/v2/{endpoint}/?key=KEY

const axios = Axios.create({
    baseURL: `${URLCORS}https://sandbox-api.brewerydb.com/v2/`,
    params: {
        key: KEY
        },
    headers: {'content-type': 'application/json'}
})

export const beerList = () => {
    debugger
    return axios({
        method:'GET',
        url: 'beers',
    })
}

export const setBeers = (beerList) => {
    window.localStorage.setItem('beerList', JSON.stringify(beerList));
}

export const getBeers = () => {
    return JSON.parse(window.localStorage.getItem('beerList'));
}