import React from 'react';

export default function Cards() {
    return (
        <section>
            <div>
                <h1>
                    Character
                </h1>

                <h2>
                    Play as a human, cyborg, or robot to start your racing journey
                </h2>

                <p>
                    Each type of character has unique skills and attributes that lend themselves better to different racing styles. Choose wisely
                    to become the best racer you can be,
                </p>

                <p>
                    Show off your style in virtual reality by collecting relics and customizing your character.
                </p>

                <div class="d-flex">
                    <div class="card" style={{width: "18rem"}}>
                        <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                    <div class="card" style={{width: "18rem"}}>
                        <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                    <div class="card" style={{width: "18rem"}}>
                        <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>
                </div>

            </div>
        </section>
    );
}