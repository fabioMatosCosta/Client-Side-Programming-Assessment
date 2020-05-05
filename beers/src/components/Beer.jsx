import React, { Component } from 'react';

class Beer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className = "button is-link is-rounded is-block is-large">
                <h3 className = "is-size-6 has-text-weight-semibold">{this.props.name}</h3>
                <h3 className = "is-size-7">Type:{this.props.style}</h3>
            </div>
        )
    }
}

export default Beer
