import React, { Component } from 'react'

function BeerContainer () {
        return (
            <div className = "beer-container">
                <h1>{this.props.name}</h1>
            </div>
        )
}

export default BeerContainer;
