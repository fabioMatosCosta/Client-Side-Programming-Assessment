import React, { Component } from 'react'

class BeerDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className ="content is-small">
                <h1 className ="title">{this.props.name}</h1>
                <img src={this.props.img} alt={this.props.nameDisplay}/>
                <p className ="subtitle">{this.props.type}</p>
                <p className="has-text-justified">{this.props.description}</p>
            </div>
        )
    }
}

export default BeerDetail
