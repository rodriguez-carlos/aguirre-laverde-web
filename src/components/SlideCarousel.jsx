import React from 'react';
import CarouselItem from './CarouselItem';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { useCarouselSlides } from '../context';
import { CarouselFixture } from '../static/fixtures/index';


const SlideCarousel = ({ startingPosition }) => {
    const carouselData = CarouselFixture;

    if (carouselData.length > 0) {
        return (
            <Carousel 
                infiniteLoop
                interval={6500} 
                showStatus={false} 
                showThumbs={false} 
                selectedItem={startingPosition}
                autoPlay={true}
            >
                {carouselData.map((slide) => (
                    <CarouselItem key={slide.id} carouselSlideData={slide} />
                ))}
            </Carousel>
        )
    }
}

export default SlideCarousel;