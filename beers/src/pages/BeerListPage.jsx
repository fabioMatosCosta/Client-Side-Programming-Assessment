import React, { Component } from 'react';
import BeerContainer from '../components/BeerContainer';
import BreweryContainer from '../components/BreweryContainer'
import { getBeers , beerList , setBeers, breweries, setBreweries, getBreweries} from '../utils/api';

class BeerListPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beers: [],
            breweries: []
        }
    }

    componentDidMount(){
        // beerList()
        // .then((response)=>{
        //     console.log(response.data.beers.data)
        //     setBeers(response.data.beers.data);
        // })
        // .then(()=>{
        //     this.setState({beers: getBeers()})
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })

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
            <div>
                {this.state.breweries.map((br)=>{
                    return(<BreweryContainer
                        key = {br.id}
                        name = {br.name}
                        loc = {br.locations[0].countryIsoCode}
                    />)}
                )}
            </div>
        )
    }
}

export default BeerListPage
