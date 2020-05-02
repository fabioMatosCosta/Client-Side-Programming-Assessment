import React, { Component } from 'react';
import {Link} from "react-router-dom";

class BreweryContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className = "brewery-container">
                <Link to= {`/beers/${this.props.id}`}>
                    <h1 className = "button is-link">{this.props.name}</h1>
                </Link>
                <p>{this.props.loc}</p>
            </div>
        )
    }
}

export default BreweryContainer
