import React from 'react';
import { Link } from 'react-router-dom';
import RoundButton from './RoundButton';
import '../styles/_carouselitem.css';
import carouselOne from '../static/imagenes-06.png'
import carouselTwo from '../static/imagenes-07.png'
import carouselThree from '../static/imagenes-08.png'


const carouselSlideData = [
    {
        carouselSlideText: "¡Más de 40 años de experiencia y conocimiento especializado!",
        carouselSlideImg: carouselOne,
        carouselSlideButton: "Conócenos",
        carouselSlideButtonRoute: "/conocenos"
    },
    {
        carouselSlideText: "¡Asesoría jurídica integral, oportuna y confiable!",
        carouselSlideImg: carouselTwo,
        carouselSlideButton: "¿Qué hacemos?",
        carouselSlideButtonRoute: "/que-hacemos"
    },
    {
        carouselSlideText: "¡Te escuchamos y te acompañamos en cada proceso!",
        carouselSlideImg: carouselThree,
        carouselSlideButton: "Contáctanos",
        carouselSlideButtonRoute: "/contactanos"
    }
]

const CarouselItem = () => {
    return (
        <div className='carousel-item'>
            <img src={carouselSlideData[0].carouselSlideImg} alt="" />
            <div className='carousel-item-right'>
                <div className='carousel-item-right-content'>
                    <p className='carousel-item-right-text'>{carouselSlideData[0].carouselSlideText}</p>
                    <Link to={carouselSlideData[0].carouselSlideButtonRoute} style={{textDecoration: "none", width: "auto"}}>
                        <RoundButton buttonSize="small" buttonIcon="back" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem;