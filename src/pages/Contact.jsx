import React from 'react';
import Nav from "../components/Nav";
import SlideCarousel from '../components/SlideCarousel';
import ContactContainer from '../components/ContactContainer';
import BackHomeButton from '../components/BackHomeButton';

const Contact = () => {
    return (
        <>
            <Nav />
            <SlideCarousel />
            <ContactContainer />
            <BackHomeButton />
        </>
    );
}
 export default Contact;