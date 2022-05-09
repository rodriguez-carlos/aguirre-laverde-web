import React from 'react';
import Nav from "../components/Nav";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import HomeAboutContainer from '../components/Home/HomeAboutContainer';
import HomeServicesContainer from '../components/Home/HomeServicesContainer';
import HomeContactContainer from '../components/Home/HomeContactContainer';
import SlideCarousel from '../components/SlideCarousel';

const Home = () => {
    return (
        <>
            <Nav />
            <SlideCarousel />
            <HomeAboutContainer />
            <HomeServicesContainer />
            <HomeContactContainer />
        </>
    );
}
 export default Home;