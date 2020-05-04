import React from 'react';
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav className="navbar is-warning is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to = {'/'}>
                        <h1 className="title">BreweryDB <span>🍺</span></h1>
                    </Link>
                </div>
                <div className="navbar-menu">
                    
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
