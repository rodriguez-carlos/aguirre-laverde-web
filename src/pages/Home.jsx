import React from 'react';
import Nav from "../components/Nav";
import CarouselItem from '../components/CarouselItem';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import HomeAboutContainer from '../components/HomeAboutContainer';
import HomeServicesContainer from '../components/HomeServicesContainer';

const Home = () => {
    return (
        <>
            <Nav />
            <Carousel autoPlay interval={6500} infiniteLoop showStatus={false} showThumbs={false}>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
            <HomeAboutContainer />
            <HomeServicesContainer />
        </>
    );
}
 export default Home;