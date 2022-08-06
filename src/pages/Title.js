import React from 'react';

export default function Title() {
    return (
        <section id="title-section" className="title-section">
            <div className="inside-section">

                <div>
                    <embed type="video/webm" src="https://youtu.be/UaKOy068O38" width="400" height="300" />
                </div>

                <div>
                    <div className="flex">
                        <h2>
                            CyberSurfer
                        </h2>

                        <hr />
                    </div>

                    <p>
                        CyberSurfer pushes the boundaries of virtual reality allowing players to hop on a physical apparatus to fly on a virtual hoverboard.
                        Players are challenged to fly at lightspeeds through a cyberpunk dystopian world to gain glory, fame, money, and power.
                        Experience CyberSurfer's evolving fusion of virtual and phyiscal movements. Will you be the fastest?
                    </p>
                </div>
                
            </div>
        </section>
    );
}