import React from "react";
import '../../styles/_homecontactcontainer.css';
import image from '../../static/imagenes-20.png';
import RoundButton from "../RoundButton";

const HomeContactContainer = () => {
    return(
        <section className="home-contact-container">
            <img src={image} alt="" />
            <RoundButton buttonIcon="plus" className="home-contact-button" />
            <div className="home-contact-text-container">
                <h2>CONTÁCTANOS</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, repellendus commodi eveniet officiis voluptatibus suscipit molestias officia dicta qui amet reprehenderit saepe aperiam quidem iste dolor pariatur vero aut necessitatibus?</p>
            </div>
        </section>
    );
}

export default HomeContactContainer;