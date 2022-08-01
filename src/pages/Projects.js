import React from 'react';;

export default function Projects() {

    return (
        <section id="portfolio" className="portfolio">
            <div className="inside-section">
                <h2>
                    My Past Work
                </h2>
                <hr />
                <p>
                    Click on the images below to highlight them. If you're interested in the project, just hover over the big image and click the link!
                </p>

                <div className="top-portfolio">
                    <figure>
                        <div className="main-image-wrapper flex">
                            <img id="change-img" />
                            <button className="port-button">Go to Project</button>
                        </div>
                        <p id="change-p">
                            
                        </p>

                    </figure>
                </div>

                <div className="bottom-portfolio grid">
                    <figure className="thumbnail">

                        <img id="bot" longdesc="" alt="Space Walk" />
                        <figcaption>An open source peer-reviewed website that helps teach about our Solar System.</figcaption>

                    </figure>

                    <figure className="thumbnail">

                        <img id="code" alt="My Portfolio"/>
                        <figcaption>My portfolio's code that I wrote.</figcaption>

                    </figure>

                    <figure className="thumbnail">

                        <img id="stamina"  alt="Project Stamina"/>
                        <figcaption>Project Stamina is a Third-Person Action MOBA that I worked as a Gameplay Programmer on.</figcaption>

                    </figure>

                    <figure className="thumbnail">

                        <img id="food" longdesc="" alt="Bougie Foodie"/>
                        <figcaption>Bougie Foodie helps you learn about the food you want to cook.</figcaption>

                    </figure>

                </div>
            </div>
        </section>

    );
}
