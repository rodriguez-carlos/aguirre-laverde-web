import React from 'react';
import { Link } from 'react-router-dom';
import RoundButton from './RoundButton';
import '../styles/_carouselitem.css';


const CarouselItem = ({carouselSlideData}) => {
    return (
        <div className='carousel-item'>
            <img className='carousel-item-image' src={carouselSlideData.carouselSlideImg} alt="" />
            <div className='carousel-item-right'>
                <div className='carousel-item-right-content'>
                    <img src={carouselSlideData.carouselSlideTextImage} alt={carouselSlideData.carouselSlideText} className='carousel-item-right-text'/>
                    <div className="carousel-item-right-actions">
                        <Link className="carousel-item-right-anchor" to={carouselSlideData.carouselSlideButtonRoute}>
                            <RoundButton buttonIcon="plus" />
                        </Link>
                        <span>{carouselSlideData.carouselSlideButton}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem;