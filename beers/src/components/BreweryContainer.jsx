import React, { Component } from 'react';
import {Link} from "react-router-dom";

class BreweryContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Link to= {`/beers/${this.props.id}/${this.props.name}`}>
                    <button className = "button is-link is-rounded">{this.props.name}</button>
                </Link>
            </div>
        )
    }
}

export default BreweryContainer
