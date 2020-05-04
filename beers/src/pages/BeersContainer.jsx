import React, { Component } from 'react';
import {getBeers} from '../utils/api';
import Beer from '../components/Beer';
import '../styles/BeersContainer.css';
import DefaultLayout from '../layout/Default';
import SearchByName from '../components/SearchByName';
import SearchByType from '../components/SearchByType';



class BeerContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: [],
            name: this.props.match.params.name,
            searchBy: "all"
        }
        this.handleChangeSearchBy=this.handleChangeSearchBy.bind(this);
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

    handleChangeSearchBy(e){
        e.preventDefault();
        let updatedSearchBy= e.target.value;
        this.setState({
            searchBy:updatedSearchBy
        })
    }

    render() {
        let searchComponent = <div></div>;

        if (this.state.searchBy === "all") {
            searchComponent = <div></div>;
        }else if(this.state.searchBy === "name") {
            searchComponent = (
                <SearchByName
                    handleSearch={this.handleSearchByDistance}
                />
            );
        }else if(this.state.searchBy === "type") {
            searchComponent = (
                <SearchByType 
                    handleSearch={this.handleSearchByName} 
                    type={this.state.type}
                />
            );
        }

        return (
            <DefaultLayout>
            <div className = "beers">
                <h1 className = "title is-1">{this.state.name}</h1>
                <div className = "columns">
                    <div className = "column">
                        <div className="field">
                        <div className="control">
                            <div className="select is-info is-rounded">
                                <p className = "is-pulled-left">Search by: </p>
                                <select name="searchBy" id="searchBy" onChange={this.handleChangeSearchBy}>
                                    <option name="searchBy" value="all">All Beers</option>
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