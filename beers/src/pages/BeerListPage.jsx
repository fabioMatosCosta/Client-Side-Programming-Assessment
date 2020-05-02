import React, { Component } from 'react';
import BeerContainer from '../components/BeerContainer';
import { getBeers , beerList , setBeers} from '../utils/api';

class BeerListPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beers: []
        }
    }

    componentDidMount(){
        beerList()
        .then((response)=>{
            console.log(response.data.beers.data)
            setBeers(response.data.beers.data);
        })
        .then(()=>{
            this.setState({beers: getBeers()})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                {this.state.beers.map((br, index)=>
                    // return(<BeerContainer
                    //     key = {index}
                    //     name = {br.name} 
                    // />)
                    <div key = {index} className = "beer-container">
                        <h1>{br.name}</h1>
                    </div>
                )}
            </div>
        )
    }
}

export default BeerListPage
