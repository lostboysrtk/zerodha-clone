import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Awards from './Awards';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import NavBar from '../Navbar';
import Education from './Education';

function HomePage() {
    return (  
        <>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </>
    );
}

export default HomePage;