import React from 'react';
import Navigation from './Navigation'

export default function Header() {

    return (
        <header>
            {/*  <div className="gradient"> */}
            <div className="row flex">
                <div className="col-6">
                    <img id="logo" src={require('../images/Logo.png')} alt="Logo" />
                </div>

                <Navigation />
            </div>

            <div className="gradient" />

            {/* </div> */}
        </header>
    )
}