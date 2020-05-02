import React, { Component } from 'react';

class Beer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className = "columns">
                <div className = "column">
                    <p className = "bd-notification is-info">Beer name: {this.props.name}</p>
                </div>
                <div className = "column">
                    {this.props.style ?
                        <p>Style: {this.props.style}</p>
                        :
                        <p>Style: Not specified</p>
                    }
                </div>
            </div>
        )
    }
}

export default Beer
