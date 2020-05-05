import React, { Component } from 'react';
import {getBeers} from '../utils/api';
import Beer from '../components/Beer';
import '../styles/BeersContainer.css';
import DefaultLayout from '../layout/Default';
import SearchByName from '../components/SearchByName';
import SearchByType from '../components/SearchByType';
import BeerDetail from '../components/BeerDetail';


class BeerContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: [],
            name: this.props.match.params.name,
            searchBy: "all",
            filteredBeers: [],
            clickedBeer: {
                name: "Click on a beer to see more details!",
                nameDisplay: "",
                style:{
                    name: "",
                    description: ""
                },
                labels: {
                    contentAwareMedium: ""
                }
            },
        }
        this.handleChangeSearchBy=this.handleChangeSearchBy.bind(this);
        this.handleSearchByName=this.handleSearchByName.bind(this);
        this.handleSearchByType=this.handleSearchByType.bind(this);
        this.clickBeer=this.clickBeer.bind(this);
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
            this.setState({
                beers: brs,
                filteredBeers: brs
            })
        })
    }

    handleChangeSearchBy(e){
        e.preventDefault();
        let updatedSearchBy= e.target.value;
        this.setState({
            searchBy:updatedSearchBy
        })
    }

    handleSearchByName(nameSearch){
        let filterTheBeers = this.state.beers.filter((item)=>{
            return(
                item.name.toLowerCase().includes(nameSearch.toLowerCase())
            )
        })
        this.setState({
            filteredBeers: filterTheBeers
        })
    }

    handleSearchByType(typeSearch){
        let filterTheBeers = this.state.beers.filter((item)=>{
            return(
                item.style.shortName.toLowerCase().includes(typeSearch.toLowerCase())
            )
        })
        this.setState({
            filteredBeers: filterTheBeers
        })
    }

    clickBeer(br){
        if(!br.beer.labels){
            let newBr = {...br.beer}
            newBr.labels = ""
            this.setState({
                clickedBeer: newBr
            })
        }else{
            this.setState({
                clickedBeer: br.beer
            })
        }
        console.log(this.state.clickedBeer)
    }

    render() {
        let searchComponent = <div></div>;

        if (this.state.searchBy === "all") {
            searchComponent = <div></div>;
        }else if(this.state.searchBy === "name") {
            searchComponent = (
                <SearchByName
                    handleSearch={this.handleSearchByName}
                />
            );
        }else if(this.state.searchBy === "type") {
            searchComponent = (
                <SearchByType 
                    handleSearch={this.handleSearchByType} 
                    type={this.state.type}
                />
            );
        }

        return (
            <DefaultLayout>
            <div className = "beers">
                <h1 className = "title is-1">{this.state.name}</h1>
                <div className = "columns is-8 ">
                    <div className = "column is-one-fifth">
                        <div className="field is-quarter">
                        <div className="control">
                            <div className="select is-info is-rounded">
                                <select name="searchBy" id="searchBy" onChange={this.handleChangeSearchBy}>
                                    <option name="searchBy" value="all">Search by</option>
                                    <option name="searchBy" value="name">Name</option>
                                    <option name="searchBy" value="type">Type</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className = "column">
                        {searchComponent}
                    </div>
                </div>
                <div className="columns">
                    <div className ="column">
                        <p className ="subtitle">Beers:</p>
                    </div>
                    <div className ="column">
                        <p className ="subtitle">Details:</p>
                    </div>

                </div>
                <div className = "columns">
                    <div className = "column is-two-thirds">
                        <div className="buttons">
                            {this.state.filteredBeers.map((beer)=>{
                                return(
                                    <div  key = {beer.id} onClick={this.clickBeer.bind(this, {beer})}>
                                        <Beer
                                            key = {beer.id}
                                            name = {beer.nameDisplay}
                                            style = {beer.style.shortName}
                                        />
                                    </div>
                                )}
                            )}
                        </div>
                    </div>
                    <div className = "column">
                        <BeerDetail
                            name = {this.state.clickedBeer.name}
                            nameDisplay = {this.state.nameDisplay}
                            type = {this.state.clickedBeer.style.name}
                            description = {this.state.clickedBeer.style.description}
                            img = {this.state.clickedBeer.labels.contentAwareMedium}
                        />
                    </div>
                </div>
            </div>
            </DefaultLayout>
        )
    }
}

export default BeerContainer