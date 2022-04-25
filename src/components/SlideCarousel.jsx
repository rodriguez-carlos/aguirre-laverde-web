import React from 'react';
import CarouselItem from './CarouselItem';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import carouselSlideData from '../static/staticCarouselData';

const SlideCarousel = () => {
    return (
        <Carousel autoPlay interval={6500} infiniteLoop showStatus={false} showThumbs={false}>
            {carouselSlideData.map((slide) => <CarouselItem carouselSlideData={slide} />)}
        </Carousel>
    )
}

export default SlideCarousel;