import React from 'react';
import Navigation from './Navigation'

export default function Header() {

    return (
        <header>
            <div className="gradient">
                <div className="upper-header"></div>

                <div id="intro">

                    <div>
                        <a className="name flex" href="#about-me">Jimmy Reilly</a>
                    </div>

                </div>
                <Navigation />
            </div>
        </header>
    )
}