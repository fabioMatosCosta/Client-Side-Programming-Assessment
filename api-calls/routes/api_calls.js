var express = require('express');
var router = express.Router();
const axios = require("axios");

const apiKey = process.env.KEY

router.get('/', function(req, res, next) {
  const url = `https://sandbox-api.brewerydb.com/v2/beers?withBreweries=Y&key=${apiKey}`;
  axios
    .get(url)
    .then(response =>{
      res.json({beers: response.data})
    })
    .catch(err => {
      console.log(`get beers error: ${err}`)
      res.status(500);
      res.json({err})
    })
});


router.get('/breweries', function(req, res, next) {
  const url = `https://sandbox-api.brewerydb.com/v2/breweries?withLocations=Y&key=${apiKey}`;

  axios
    .get(url)
    .then(response =>{
      res.json({breweries: response.data.data})
    })
    .catch(err => {
      console.log(`get locations error: ${err}`)
      res.status(500);
      res.json({err})
    })
});


router.get('/breweries/:id', function(req, res, next) {
  const brId = req.params.id
  const url = `https://sandbox-api.brewerydb.com/v2/brewery/${brId}/beers?key=${apiKey}`;

  axios
    .get(url)
    .then(response =>{
      res.json({beersById: response.data.data})
    })
    .catch(err => {
      console.log(`get beersById error: ${err}`)
      res.status(500);
      res.json({err})
    })
});

router.get('/locations', function(req, res, next) {
  const url = `https://sandbox-api.brewerydb.com/v2/locations?order=countryIsoCode&key=${apiKey}`;

  axios
    .get(url)
    .then(response =>{
      res.json(response.data.data)
    })
    .catch(err => {
      console.log(`get locations error: ${err}`)
      res.status(500);
      res.json({err})
    })
});

module.exports = router;