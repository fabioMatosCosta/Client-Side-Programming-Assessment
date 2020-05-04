import React, { Component } from 'react';
import BreweryContainer from '../components/BreweryContainer';
import { breweries, setBreweries, getBreweries} from '../utils/api';
import GoogleMapReact from 'google-map-react';
import {Link} from "react-router-dom";
let API_KEY = process.env.REACT_APP_APIKEY;

class BreweryList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            breweries: [],
            locations: []
        }
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
            this.setState({breweries: brsWithLocation})
        })
    }

    render() {
        return (
            <div className = "columns is-multiline">
                <div className = "column">
                    <h1 className= "is-size-4">Click Brewery to see beers:</h1>
                        {this.state.breweries.map((br)=>{
                            return(<BreweryContainer
                                key = {br.id}
                                id = {br.id}
                                name = {br.name}
                                loc = {br.locations[0].country.name}
                            />)}
                        )}
                </div>
                <div className = "column">
                <div id="map">
                        <GoogleMapReact defaultCenter={{lat: 52.379189, lng: 4.899431}} defaultZoom={1} bootstrapURLKeys={{
                            key: API_KEY, 
                            language: 'en'
                            }}>
                            {this.state.breweries.map((br)=>{
                                return(<Link 
                                            key = {br.id}
                                            to= {`/beers/${br.id}`}
                                            lat={br.locations[0].latitude}
                                            lng={br.locations[0].longitude}
                                        >
                                        🍺
                                        </Link>
                                )}
                            )}
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        )
    }
}

export default BreweryList 