import React, { Component } from 'react';

class Beer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            
            <div className = "columns">
                <div className = "column">
                    <h3 className="is-size-5">Beer name:</h3>
                    <p className = "bd-notification is-info"> {this.props.name}</p>
                </div>
                <div className = "column">
                    <h3 className="is-size-5">Style:</h3>
                    {this.props.style ?
                        <p>{this.props.style}</p>
                        :
                        <p>Not specified</p>
                    }
                </div>
            </div>
        )
    }
}

export default Beer
