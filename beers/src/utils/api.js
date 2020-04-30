import axios from 'axios';

const KEY = process.env.KEY;

//http://api.brewerydb.com/v2/{endpoint}/?key=KEY

const axios = Axios.create({
    baseURL: 'https://sandbox-api.brewerydb.com/v2/',
    params: {
        key: KEY
        },
    headers: {'content-type': 'application/json'}
})

export const getBeers = (beerList) => {
    return axios({
        method:'GET',
        url: 'beers',
        data: qs.stringify(beerList)
    })
    .then((response)=>{
            setBeers(response.data);
    })
}

export const setBeers = (beerList) => {
    window.localStorage.setItem('beerList', JSON.stringify(beerList));
}