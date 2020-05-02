import React, { Component } from 'react';
import BreweryContainer from '../components/BreweryContainer';
import { breweries, setBreweries, getBreweries} from '../utils/api';

class BeerListPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            breweries: []
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
                    <p>Click Brewery to see beers:</p>
                    {this.state.breweries.map((br)=>{
                        return(<BreweryContainer
                            key = {br.id}
                            id = {br.id}
                            name = {br.name}
                            loc = {br.locations[0].countryIsoCode}
                        />)}
                    )}
                </div>
                <div className = "column">
                </div>
            </div>
        )
    }
}

export default BeerListPage
