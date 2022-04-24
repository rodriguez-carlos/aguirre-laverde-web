import React from 'react';
import image from '../static/Recurso-1.png'
import '../styles/_servicecard.css';

const ServiceCard = () => {
    return (
        <div className="service-card">
            <img src={image} alt="" />
            <div className='service-card-title'>
                <p>Responsabilidad Civil y Seguros</p>
            </div>
        </div>
    )
}

export default ServiceCard;