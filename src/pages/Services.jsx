import React from 'react';
import Nav from "../components/Nav";
import SlideCarousel from '../components/SlideCarousel';
import ServicesContainer from '../components/ServicesContainer';
import ServicesModelsContainer from '../components/ServicesModelsContainer';

const Services = () => {
    return (
        <>
            <Nav />
            <SlideCarousel />
            <ServicesContainer />
            <ServicesModelsContainer />
        </>
    );
}
 export default Services;