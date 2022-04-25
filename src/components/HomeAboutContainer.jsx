import React from 'react';
import logo from '../static/DEFINITIVOS-06.png';
import RoundButton from './RoundButton';
import Circle from './Circle';
import Title from './Title';
import '../styles/_homeaboutcontainer.css'

const HomeAboutContainer = () => {
    return (
        <section className="home-about-container">
            <Circle
                color="#2a514d"
                size="40vw"
                left="50%"
            />
            <Circle
                color="#50706d"
                size="20vw"
                left="40%"
                top="50%"
            />
            <div className='home-about-content'>
                <div className='home-about-text-container'>
                    <Title>CONOCENOS</Title>
                    <div className='home-about-text-text'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem animi repudiandae distinctio dolores. Adipisci repellendus autem a commodi veniam delectus vero, dolorem, non recusandae, suscipit dicta nulla doloribus rerum laudantium?
                        </p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem animi repudiandae distinctio dolores. Adipisci repellendus autem a commodi veniam delectus vero, dolorem, non recusandae, suscipit dicta nulla doloribus rerum laudantium?
                        </p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem animi repudiandae distinctio dolores. Adipisci repellendus autem a commodi veniam delectus vero, dolorem, non recusandae, suscipit dicta nulla doloribus rerum laudantium?
                        </p>
                    </div>
                </div>
                <div className="home-about-logo">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className='home-about-actions'>
                <p>Más de conócenos</p>
                <RoundButton buttonIcon="plus"/>
            </div>
        </section>
    )
}

export default HomeAboutContainer;