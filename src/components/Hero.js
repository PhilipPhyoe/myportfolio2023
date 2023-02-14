import React from 'react';
import { Button } from './Button';
import "./Hero.css";

function Hero () {
    return(
        <div className='hero'>
            <h1 className='hero-title'>Hi! I am Philip Pyaie Phyoe.</h1>
            <h2 className='hero-subtitle'>I <span>write</span>, <span>develop</span>, <span>direct</span> & <span>consult.</span></h2>
            <p className='hero-message'>I am an entrepreneur based in Rangoon, Burma.
                I have experiences in copywriting, social media marketing, design and web & mobile app development. 
                I wrote <span>4</span> business books emphasizing marketing. 
                Ahh! I also direct some films. My creative productions are coming soon! 
            </p>
            <div className='hero-button'>
                <Button buttonStyle={"btn--outline"} buttonSize={"btn-large"} child={"Let's talk!"}></Button>
            </div>
        </div>
    );
}

export default Hero;