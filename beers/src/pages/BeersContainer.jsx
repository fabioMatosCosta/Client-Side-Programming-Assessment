import React, { Component } from 'react';
import {getBeers} from '../utils/api';
import Beer from '../components/Beer';
import '../styles/BeersContainer.css';
import DefaultLayout from '../layout/Default';


class BeerContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: [],
            name: this.props.match.params.name
        }
    }

    
    componentDidMount(){
        let id = this.props.match.params.id;
        getBeers(id)
        .then((response)=>{
            let brewery = response.data 
            console.log(brewery)
            let brs = response.data.beersById.filter(br => {
                return br.hasOwnProperty("style")
            })
            console.log(brs)
            this.setState({beers: brs})
        })
    }

    render() {
        return (
            <DefaultLayout>
            <div className = "beers">
                <h1 className = "title is-1">{this.state.name}</h1>
                <div className = "columns">
                    <div className = "column">
                        {this.state.beers.map((beer)=>{
                                return(<Beer
                                    key = {beer.id}
                                    name = {beer.nameDisplay}
                                    style = {beer.style.shortName}
                                />)}
                            )}
                    </div>
                    <div className = "column">
                        
                    </div>
                </div>
            </div>
            </DefaultLayout>
        )
    }
}

export default BeerContainer