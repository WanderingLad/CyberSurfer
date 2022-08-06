import React from 'react';
import Title from './Title';
import Board from './Board';
import World from './World';
import Cards from './Cards';
import About from './About';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Title />
            <Board />
            <World />
            <Cards />
            {/* Maybe just add the BAI here? */}
            <About />
            <Footer />
        </div>
    );
}