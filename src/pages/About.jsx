import React from 'react';
import Nav from "../components/Nav";
import AboutContainer from '../components/AboutContainer';
import SlideCarousel from '../components/SlideCarousel';
import BackHomeButton from '../components/BackHomeButton';

const About = () => {
    return (
        <>
            <Nav />
            <SlideCarousel />
            <AboutContainer />
            <BackHomeButton />
        </>
    );
}
 export default About;