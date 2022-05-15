import React from 'react';
import CarouselItem from './CarouselItem';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { useCarouselSlides } from '../context';

const SlideCarousel = ({ startingPosition }) => {
    const carouselData = useCarouselSlides();

    return (
        <Carousel 
            autoPlay 
            interval={6500} 
            infiniteLoop 
            showStatus={false} 
            showThumbs={false} 
            selectedItem={startingPosition ? startingPosition : 0}
        >
            {carouselData.map((slide) => <CarouselItem key={slide.id} carouselSlideData={slide.attributes}/>)}
        </Carousel>
    )
}

export default SlideCarousel;