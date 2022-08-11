import React from 'react';
import Navigation from './Navigation'

export default function Header() {

    return (
        <header>
            <div className="row flex">
                <div className="col-6 header-logo">
                    <img id="header-logo" src={require('../images/Logo.png')} alt="Logo" />
                </div>
                <div className="col-6 text-right">
                    <Navigation />
                </div>
            </div>

            <div className="gradient" />

        </header>
    )
}