import React from 'react';
import styled from '@emotion/styled';
import image from '../static/imagenes-20.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import RoundButton from "./RoundButton";
import { Container } from './Layout';
import Title from './Title';

const SectionContainer = styled(Container)`
    background: linear-gradient(180deg, #054340 0%, #054340 64%, #ffffff 64%, #ffffff 100%);
`;

const Image = styled.img`
    height: 400px;
    max-width: 90%;
`;

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
`;

const TextContainer = styled.div`
    width: 100%;
    min-width: 500px;
    background-color: #d8dbdb;
    color: #062b27;
    padding: 40px 60px;
    box-sizing: border-box;

    p {
        text-align: center;
        font-size: 26px
    }
`;

const FormSection = styled.div`
    display: flex;
    flex-direction: row;
    height: 500px;
`;

const FormLeftContainer = styled.div`
    width: 55%;
    background-color: #054340;
`;

const FormRightContainer = styled.div`
    width: 45%;
    background-color: #326864;
`;

const ContactInfo = styled.div `
    color: #ffffff;
    font-size: 24px;
    font-family: 'Regular'
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    height: 100%;
    width: 100%;

    a {
        text-decoration: none;
        color: #ffffff
    }
`

const ContactContainer = () => {
    return (
        <>
            <SectionContainer>
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
                    <ContactInfo>
                        <a href=""><p><FontAwesomeIcon icon={faWhatsapp}/>+57 317 648 5863</p></a>
                        <a href=""><p><FontAwesomeIcon icon={faEnvelope} />info@aguirrelaverde.com</p></a>
                        <p>MEDELLÍN - COLOMBIA</p>
                    </ContactInfo>
                </FormLeftContainer>
                <FormRightContainer>


                </FormRightContainer>
            </FormSection>
        </>
    )
}

export default ContactContainer;