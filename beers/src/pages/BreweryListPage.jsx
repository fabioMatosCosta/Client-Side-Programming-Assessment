import React, { Component } from 'react';
import BreweryContainer from '../components/BreweryContainer';
import { breweries, setBreweries, getBreweries, locations, setLocations, getLocations, getCountries} from '../utils/api';
import GoogleMapReact from 'google-map-react';
import {Link} from "react-router-dom";
import DefaultLayout from '../layout/Default';
import '../styles/BeersContainer.css';

let API_KEY = process.env.REACT_APP_APIKEY;

class BreweryList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            breweries: [],
            locations: [],
            countries: [],
            selected: "all",
            filteredBreweries: []
        }
        this.handleChange=this.handleChange.bind(this);
        this.filterByCountry=this.filterByCountry.bind(this);
    }

    componentDidMount(){
        breweries()
        .then((response)=>{
            console.log(response.data)
            setBreweries(response.data.breweries)
        })
        .then(()=>{
            let brsWithLocation = getBreweries().filter(br => {
                return br.hasOwnProperty("locations")
            })
            console.log(brsWithLocation)
            this.setState({
                breweries: brsWithLocation,
                filteredBreweries: brsWithLocation
            })
        })
        locations()
        .then((response)=>{
            console.log(response.data)
            setLocations(response.data)
        })
        .then(()=>{
            this.setState({
                locations : getLocations(),
                countries: getCountries()
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    handleChange(e){
        e.preventDefault();
        let updatedSelected = e.target.value;
        this.setState({
            selected:updatedSelected
        }, this.filterByCountry)
    }

    filterByCountry(){
        let brCopy = [...this.state.breweries];
        let country = this.state.selected;
        if(country === 'all'){
            this.setState({
                filteredBreweries: brCopy
            })
        } else {
            let filteredBr = brCopy.filter( function(br){
                return br.locations[0].countryIsoCode === country
            })
            this.setState({
                filteredBreweries: filteredBr
            })
        }
    }


    render() {
        return (
            <DefaultLayout>
            <div className = "columns is-multiline beers">
                <div className = "column">
                    <h1 className= "title is-pulled-left">Breweries:</h1>
                    <div class="field">
                        <div class="control has-icons-left">
                            <div class="select is-info is-rounded">
                                <select name="countryFilter" id="countryFilter" value={this.state.selected.toString()} onChange={this.handleChange}>
                                    <option name="countryFilter" value="all">
                                        All Countries
                                    </option>
                                    {this.state.countries.map((country, index)=>{
                                        return(
                                            <option name="countryFilter" value={country} key={index}>
                                                {country}
                                            </option>
                                        )}
                                    )}
                                </select>
                            </div>
                            <span className="icon is-small is-left">
                                🌍
                            </span>
                        </div>
                    </div>

                    <p className = "is-pulled-left">Click Brewery to see beers</p>
                        <br></br>
                        {this.state.filteredBreweries.map((br)=>{
                            return(
                            <div className = "buttons">
                                <BreweryContainer
                                    key = {br.id}
                                    id = {br.id}
                                    name = {br.name}
                                    loc = {br.locations[0].country.name}
                                />
                            </div>
                            )}
                        )}
                </div>
                <div className = "column">
                    <h1 className="title">Breweries locations:</h1>
                    <div id="map">
                        <GoogleMapReact defaultCenter={{lat: 52.379189, lng: 4.899431}} defaultZoom={1} bootstrapURLKeys={{
                            key: API_KEY, 
                            language: 'en'
                            }}>
                            {this.state.locations.map((br)=>{
                                return(<Link 
                                            key = {br.id}
                                            to= {`/beers/${br.breweryId}/${br.brewery.name}`}
                                            lat={br.latitude}
                                            lng={br.longitude}
                                        >
                                        <span>🍺</span>
                                        </Link>
                                )}
                            )}
                        </GoogleMapReact>
                        <p>Click the beer icon <span>🍺</span> on the map to see details of the brewery</p>
                    </div>
                </div>
            </div>
            </DefaultLayout>
        )
    }
}

export default BreweryList 