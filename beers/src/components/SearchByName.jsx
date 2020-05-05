import React, { Component } from 'react';

class SearchByName extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter: ""
        }
    }


    handleSearch = (e) => {
        e.preventDefault();
        this.setState({
            filter: e.target.value
        })    
        this.props.handleSearch(e.target.value); 
    }

    render(){
        return(
            <div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input is-info is-pulled-left is-focused is-rounded is-medium" type="text" placeholder = "Search by name" value={this.state.filter} onChange={this.handleSearch}/>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchByName;