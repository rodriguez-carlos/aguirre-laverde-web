import React from 'react';
import styled from '@emotion/styled';
import image from '../static/imagenes-20.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Container } from './Layout';
import Circle from './Circle';
import RoundButton from './RoundButton';
import Title from './Title';

const SectionContainer = styled(Container)`
    background: linear-gradient(180deg, #054340 0%, #054340 64%, #ffffff 64%, #ffffff 100%);
    padding-top: 230px;
    position: relative;
`;

const Image = styled.img`
    height: 400px;
    max-width: 90%;
`;

const FloatingEllipsis = styled.div`
    position: absolute;
    top: 90px;
    right: 35%;
    font-size: 100px;
    color: #628785;
`

const BoxContainer = styled.div`
    display: flex;
    width: 80%;
    position: relative;
`;

const InfoContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-200px, -50%);
    display: flex;
    text-align: center;
`;

const TextContainer = styled.div`
    width: 100%;
    height: 220px;
    min-width: 500px;
    background-color: #d8dbdb;
    color: #062b27;
    padding: 40px 60px;
    box-sizing: border-box;
    margin-top: -80px;

    p {
        margin-top: -7px;
        text-align: center;
        font-size: 26px;
        line-height: 26px;
    }
`;

const FormSection = styled.div`
    display: flex;
    flex-direction: row;
    height: 800px;
    margin-bottom: 60px;
`;

const FormLeftContainer = styled.div`
    width: 55%;
    background-color: #054340;
    color: #ffffff;
    font-size: 32px;
    font-family: 'Regular';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;

    p {
        margin-top: 0;
        margin-bottom: 8px;
    }

    a {
        text-decoration: none;
        color: #ffffff;
        display: block;

    }
`;

const FormRightContainer = styled.div`
    width: 45%;
    background-color: #326864;
`;

const ContactForm = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input, textarea {
        border: none;
        border-radius: 7px;
        color: #000000;
        background-color: #D8DBDB;
        width: 60%;
        font-size: 18px;
        padding-left: 10px;
        height: 42px;
        font-family: "Regular";
    }

    textarea {
        margin-bottom: 42px;
        height: 240px;
    }
`;

const FormActions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60%;

    input {
        border: none;
        border-radius: 7px;
        color: red;
        background-color: #D8DBDB;
        font-size: 18px;
    }

    label {
        float: right;
        color: #D8DBDB;
    }

    a {
        text-decoration: none;
    }
    span {
        color: #fff;
        margin-left: 10px;
    }
`;


const ContactContainer = () => {
    const doNothing = () => {
        return null;
    }
    return (
        <>
            <SectionContainer>
                <Circle
                    color="#16514E"
                    size="450px"
                    top="70px"
                    right="23%"
                />
                <Circle
                    color="#A5B4B3"
                    size="190px"
                    top="300px"
                    right="37%"
                />
                <FloatingEllipsis><FontAwesomeIcon icon={faEllipsis} /></FloatingEllipsis>
                <BoxContainer>
                    <Image src={image} alt="" />
                    <InfoContainer>
                        <TextContainer>
                            <Title color="#062b27" >CONTÁCTANOS</Title>
                            <p>
                                ¡Déjanos tus datos y muy pronto nos pondremos en contacto!
                            </p>
                        </TextContainer>
                    </InfoContainer>
                </BoxContainer>
            </SectionContainer>
            <FormSection>
                <FormLeftContainer>
                    <div>
                        <a href="https://wa.me/573176485863" target="_blank" rel="noopener noreferrer"><p><FontAwesomeIcon icon={faWhatsapp}/> +57 317 648 5863</p></a>
                        <a href="mailto:info@aguirrelaverde.com"><p><FontAwesomeIcon icon={faEnvelope} /> info@aguirrelaverde.com</p></a>
                        <p>MEDELLÍN - COLOMBIA</p>
                    </div>
                </FormLeftContainer>
                <FormRightContainer>
                    <ContactForm target="_blank" action="https://formsubmit.co/carlosdanielrod@gmail.com" method="POST">
                        <input type="text" id="nameAndLastName" name="Nombre y apellido" placeholder='NOMBRE Y APELLIDO' aria-label='Nombre y apellido'/><br />
                        <input type="text" id="email" name="Email" placeholder='MAIL' aria-label='Mail'/><br />
                        <input type="text" id="phone" name="Teléfono" placeholder='TELÉFONO' aria-label='Teléfono'/><br />
                        <textarea name="Mensaje" id="message" cols="20" rows="10" placeholder='MENSAJE' aria-label='Mensaje'></textarea>
                        <FormActions>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%"}}>
                                <div style={{width: "100%", display: "flex", flexDirection: "row", alignItems: "center"}}>
                                    <input type="checkbox" id='accept-policy' style={{flex: "none"}}/>
                                    <label htmlFor="accept-policy">Acepto</label>
                                </div>
                                <div style={{width: "100%", display: "flex", flexDirection: "row", alignItems: "center"}}>
                                    <a href="https://drive.google.com/file/d/1soIs_M-EpVeCIAH0-8_qprFptsF3rApo/view?usp=sharing" target="_blank" rel="noopener noreferrer"><RoundButton type="button" tinyVersion buttonIcon="ver" /></a>
                                    <span>Política de tratamiento <br/> de datos personales</span>
                                </div>
                            </div>
                            <div>
                                <RoundButton isSubmit buttonIcon="enviar" buttonSize="large"></RoundButton>
                            </div>
                        </FormActions>
                    </ContactForm>
                </FormRightContainer>
            </FormSection>
        </>
    )
}

export default ContactContainer;