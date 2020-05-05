import React from 'react';
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav className="navbar is-warning is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to = {'/'}>
                        <h1 className="title">BreweryDB <span aria-label ="beer" role="img">🍺</span></h1>
                    </Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-item">
                        <Link to = {'/'}>
                            <h1 className="subtitle ">Home</h1>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
