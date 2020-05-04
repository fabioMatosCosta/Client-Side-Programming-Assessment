import React from 'react';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';

function Default(props) {
    return (
        <div>
            <Nav />
                {props.children}
            <Footer/>
        </div>
    )
}

export default Default;
