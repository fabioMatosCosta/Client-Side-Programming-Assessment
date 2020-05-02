import React, { Component } from 'react'

class BreweryContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className = "brewery-container">
                <h1>{this.props.name}</h1>
                <p>{this.props.loc}</p>
            </div>
        )
    }
}

export default BreweryContainer
