import React from 'react';
import Title from './Title';
import Board from './Board';
import Game from './Game';
import World from './World';
import Cover from './Cover';
import Cards from './Cards';
import About from './About';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div class="container">
            <Title />
            <Board />
            <Game />
            <Cards />
            <World />
            <Cover />
            <About />
            <Footer />
        </div>
    );
}