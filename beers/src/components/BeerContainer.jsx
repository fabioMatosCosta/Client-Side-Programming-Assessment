import React, { Component } from 'react'

class BeerContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className = "beer-container">
                <h1>{this.props.name}</h1>
                <p>Style : {this.props.style}</p>
            </div>
        )
    }
}

export default BeerContainer
