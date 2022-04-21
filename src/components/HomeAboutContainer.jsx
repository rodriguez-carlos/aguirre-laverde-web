import React from 'react';
import logo from '../static/DEFINITIVOS-06.png';
import RoundButton from './RoundButton';
import '../styles/_homeaboutcontainer.css'

const HomeAboutContainer = () => {
    return (
        <section className="home-about-container">
            <div className='home-about-content'>
                <div className='home-about-text-container'>
                    <h2 className="home-about-text-title">CONOCENOS</h2>
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