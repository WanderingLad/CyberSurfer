import React from 'react';

export default function Board() {
    return (
        <section>
            <div>

                <div class="d-flex">
                    <h2>
                        Your Board
                    </h2>

                    <div>
                        <h2>
                            The First In-Home Physical Board 1
                        </h2>

                        <p>
                            The Cyberboard is the first in-home physical apparatus for mixed reality.
                            The Cyberboard tracks directional movement controlling virtual movement inside CyberSurfer, a true 1 : 1 correlation from physical reality into fluid virtual hoverboarding.
                        </p>

                        <h2>
                            The First Ever Racing Hoverboard The "ZX32"
                        </h2>

                        <p>
                            The first hoverboard of its class to handles lightspeed and high impact environments to rival and competitors in the void.
                            The ZX32 can be tuned specifically to each riders preference, a perfect board leaving no excuses on mechanical issues, but rider error.
                        </p>
                    </div>

                    <div>
                        <img src={require('../images/Big Moon.jpg')} alt="Logo" />
                    </div>
                </div>

                <div>
                    <p>Interested in how our board works?</p>
                    <button>Check out our dev logs</button>
                </div>

            </div>
        </section>
    );
}