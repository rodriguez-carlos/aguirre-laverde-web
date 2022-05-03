import React from 'react';
import Nav from "../components/Nav";
import SlideCarousel from '../components/SlideCarousel';
import ServicesContainer from '../components/ServicesContainer';
import ServicesModelsContainer from '../components/ServicesModelsContainer';
import BackHomeButton from '../components/BackHomeButton';

const Services = () => {
    return (
        <>
            <Nav />
            <SlideCarousel startingPosition={2}/>
            <ServicesContainer />
            <ServicesModelsContainer />
            <BackHomeButton />
        </>
    );
}
 export default Services;