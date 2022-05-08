import React from 'react';
import styled from '@emotion/styled';
import image from '../static/imagenes-20.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Container } from './Layout';
import Circle from './Circle';
import RoundButton from './RoundButton';
import BackHomeButton from './BackHomeButton';
import Title from './Title';

const SectionContainer = styled(Container)`
    background: linear-gradient(180deg, #054340 0%, #054340 64%, #326864 64%, #326864 100%);
    position: relative;
    padding-top: 100px;

    @media (min-width: 960px) {
        padding-top: 180px;
        padding-bottom: 180px;
        background: linear-gradient(180deg, #054340 0%, #054340 64%, #ffffff 64%, #ffffff 100%);
    }
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    max-width: 80%;

    @media (min-width: 960px) {
        height: 400px;
        max-width: 90%;
    }
`;

const FloatingEllipsis = styled.div`
    position: absolute;
    top: 150px;
    right: 29%;
    font-size: 100px;
    color: #628785;
`

const BoxContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    width: 90%

    @media (min-width: 960px) {
        width: 80%;
        max-width: 950px;
    }
`;

const SectionTitle = styled(Title)`
    font-size: 20px;

    @media (min-width: 650px) {
        font-size: 30px;
    }

    @media (min-width: 960px) {
        font-size: 50px;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: flex-end;
`;

const TextContainer = styled.div`
    width: 65%;
    max-width: 300px;
    background-color: #d8dbdb;
    color: #062b27;
    padding: 20px;
    box-sizing: border-box;
    margin-top: 30px;

    p {
        text-align: center;
        font-size: 16px;
        margin: -10px 0 0 0;
        line-height: 1.25;
    }

    @media (min-width: 960px) {
        margin-top: -7px;
        font-size: 26px;
        line-height: 26px;
        padding: 60px 60px 70px;
        height: 210px;
        min-width: 500px;
        margin-top: 80px;
        width: 100%;

        p {
            margin: 18px 0;
            font-size: 24px;
            line-height: 1.5;
        }
    }
`;

const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    height: 800px;
    margin-bottom: 60px;

    @media (min-width: 960px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

const FormLeftContainer = styled.div`
    background: #326864;
    color: #ffffff;
    font-family: 'Regular';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    padding: 80px 0;

    p {
        margin-top: 0;
        margin-bottom: 15px;
        font-size: 24px;
    }

    a {
        text-decoration: none;
        color: #ffffff;
        display: block;
    }

    @media (min-width: 960px) {
        background-color: #054340;
        width: 55%;
        text-align: left;

        p {
            margin-top: 0;
            margin-bottom: 25px;
            font-size: 32px;
        }
    }
`;

const FormRightContainer = styled.div`
    padding: 80px 0;
    background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 64%, #5F8D88 64%, #5F8D88 100%);

    @media (min-width: 960px) {
        background: #326864;
        width: 45%;
    }
`;

const ContactForm = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input, textarea {
        border: none;
        border-radius: 10px;
        color: #062B27;
        background-color: #D8DBDB;
        width: 70%;
        font-size: 18px;
        padding-left: 10px;
        height: 42px;
        font-family: "Regular";
        padding: 5px 10px;
        border: 2px solid transparent;

        ::placeholder {
            color: #608e89;
            opacity: 0.5;
        }

        :focus {
            outline: none;
            border: 2px solid #326864;
        }
    }

    textarea {
        margin-bottom: 42px;
        height: 200px;
    }

    input[type="checkbox"] {
        width: 35px;
        height: 35px;
        margin-right: 20px;
    }

    @media (min-width: 960px) {
        input, textarea {
            width: 60%;
        }

        textarea {
            height: 240px;
        }
    }
`;

const FormActions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;

    input {
        border: none;
        background-color: #D8DBDB;
        font-size: 18px;
        padding: 10px;
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
    }

    @media (min-width: 960px) {
        width: 60%;
    }
`;

const BackHomeButtonContainer = styled.div`
    width: 100%;
    padding: 30px 0 10px;
`;

const TCButton = styled(RoundButton)`
    height: 45px;
    width: 45px;

    span {
        font-size: 18px;
    }
`;

const EnviarButton = styled(RoundButton)`
    height: 90px;
    width: 90px;
    margin-left: 10px;
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
                    size="430px"
                    top="70px"
                    right="24%"
                />
                <Circle
                    color="#A5B4B3"
                    size="190px"
                    top="360px"
                    right="30%"
                />
                <Circle
                    color="#16514E"
                    size="190px"
                    top="40px"
                    right="10%"
                    mobile
                />
                <Circle
                    color="#2A5955"
                    size="250px"
                    top="170px"
                    right="50%"
                    mobile
                />
                <FloatingEllipsis><FontAwesomeIcon icon={faEllipsis} /></FloatingEllipsis>
                <BoxContainer>
                    <Image src={image} alt="" />
                    <InfoContainer>
                        <TextContainer>
                            <SectionTitle color="#062b27" >CONTÁCTANOS</SectionTitle>
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
                                <div style={{width: "100%", display: "flex", flexDirection: "row", alignItems: "center", marginBottom: '10px' }}>
                                    <input type="checkbox" id='accept-policy' style={{flex: "none"}}/>
                                    <label htmlFor="accept-policy">Acepto</label>
                                </div>
                                <div style={{width: "100%", display: "flex", flexDirection: "row", alignItems: "center"}}>
                                    <a href="https://drive.google.com/file/d/1soIs_M-EpVeCIAH0-8_qprFptsF3rApo/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <TCButton type="button" tinyVersion buttonIcon="ver" />
                                    </a>
                                    &nbsp;&nbsp;
                                    <span>Política de tratamiento <br/> de datos personales</span>
                                </div>
                            </div>
                            <div>
                                <EnviarButton isSubmit buttonIcon="enviar" buttonSize="large"></EnviarButton>
                            </div>
                        </FormActions>
                    </ContactForm>
                </FormRightContainer>
                <BackHomeButtonContainer>
                    <BackHomeButton />
                </BackHomeButtonContainer>
            </FormSection>
        </>
    )
}

export default ContactContainer;