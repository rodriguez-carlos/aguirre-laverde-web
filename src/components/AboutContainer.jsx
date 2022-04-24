import React from 'react';
import image from '../static/VERSION-MOBIL-15.jpg';

const AboutContainer = () => {
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
                    <img src={image} alt="" />
                </div>
            </div>
        </section>
    )
}

export default AboutContainer;