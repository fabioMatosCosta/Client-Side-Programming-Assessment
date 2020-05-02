import React, { Component } from 'react';
import {getBeers} from '../utils/api';
import Beer from '../components/Beer'

class BeerContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: []
        }
    }

    
    componentDidMount(){
        let id = this.props.match.params.id;
        getBeers(id)
        .then((response)=>{
            console.log(response.data.beersById)
            this.setState({beers: response.data.beersById})
        })
    }

    render() {
        return (
            <div>
                {this.state.beers.map((beer)=>{
                        return(<Beer
                            key = {beer.id}
                            name = {beer.name}
                            style = {beer.style.name}
                        />)}
                    )}
            </div>
        )
    }
}

export default BeerContainer
