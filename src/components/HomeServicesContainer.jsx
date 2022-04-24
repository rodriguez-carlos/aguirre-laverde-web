import React from 'react';
import RoundButton from './RoundButton';
import '../styles/_homeservicescontainer.css';
import ServiceCard from './ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const HomeServicesContainer = () => {
    return (
        <section className='home-services-container'>
            <div className='home-services-title'>
                <h2>
                    <FontAwesomeIcon icon={faEllipsis} style={{color: "#3A4948"}} />
                    ¿QUÉ HACEMOS?
                </h2>
            </div>
            <div className='home-services-intro'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam perspiciatis aperiam adipisci voluptates accusamus assumenda nulla quidem distinctio praesentium deserunt, veritatis reprehenderit repellat necessitatibus ut perferendis, optio doloribus fugiat ex.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, alias obcaecati. Cupiditate corporis architecto, quas dolores quam ut, excepturi necessitatibus quo accusamus aspernatur voluptatem totam aut consequatur ducimus ea magnam.</p>
            </div>
            <div className='home-services-cards-container'>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
            <div className='home-services-actions'>
                <p>Más de ¿QUÉ HACEMOS?</p>
                <RoundButton buttonIcon="plus"/>
            </div>
        </section>
        
    );
}

export default HomeServicesContainer;