import React, { useState } from 'react';
import CarouselItem from './CarouselItem';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import carouselSlideData from '../static/staticCarouselData';

const SlideCarousel = () => {
    const [carouselData, setCarouselData] = useState(carouselSlideData);
    return (
        <Carousel autoPlay={false} interval={6500} infiniteLoop showStatus={false} showThumbs={false}>
            {carouselData.map((slide) => <CarouselItem carouselSlideData={slide}/>)}
        </Carousel>
    )
}

export default SlideCarousel;