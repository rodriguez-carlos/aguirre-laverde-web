import React from 'react';
import Nav from "../components/Nav";
import SlideCarousel from '../components/SlideCarousel';
import ContactContainer from '../components/ContactContainer';

const Contact = () => {
    return (
        <>
            <Nav />
            <SlideCarousel startingPosition={0} />
            <ContactContainer />
        </>
    );
}
 export default Contact;