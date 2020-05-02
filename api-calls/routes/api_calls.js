var express = require('express');
var router = express.Router();
const axios = require("axios");

const apiKey = process.env.KEY
const apiURL = process.env.URL

/* GET beers from api. */
router.get('/', function(req, res, next) {
  const url = `https://sandbox-api.brewerydb.com/v2/beers?withBreweries=Y&key=659d5c6b8f3d2447f090119e48202fdb`;
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
  const url = `https://sandbox-api.brewerydb.com/v2/breweries?withLocations=Y&key=659d5c6b8f3d2447f090119e48202fdb`;



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


module.exports = router;