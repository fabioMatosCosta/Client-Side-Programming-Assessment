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
            setBeers(response.data);
        })
        .then((response)=>{
            this.setState({beers: response.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                {this.state.beers.map((br)=> 
                    <BeerContainer
                        key = {br.id}
                        name = {br.name} 
                    />
                    )}
            </div>
        )
    }
}

export default BeerListPage
