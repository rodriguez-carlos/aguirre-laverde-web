import React from 'react';
import Nav from "../components/Nav";
import AboutContainer from '../components/AboutContainer';
import SlideCarousel from '../components/SlideCarousel';

const About = () => {
    return (
        <>
            <Nav />
            <SlideCarousel startingPosition={1}/>
            <AboutContainer />
        </>
    );
}
 export default About;