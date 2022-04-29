import React from "react";
import styled from '@emotion/styled';
import image from '../../static/imagenes-20.png';
import RoundButton from "../RoundButton";
import { Container } from '../Layout';
import Title from '../Title';

const SectionContainer = styled(Container)`
    padding-top: 180px;
    padding-bottom: 120px;
    background: linear-gradient(180deg, rgba(5,67,64,1) 64%, rgba(255,255,255,1) 64%, rgba(255,255,255,1) 71%);
`;

const Image = styled.img`
    height: 400px;
    max-width: 90%;
`;

const BoxContainer = styled.div`
    display: flex;
    width: 1000px;
    position: relative;
`;

const InfoContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-120px, -50%);
    display: flex;

    a {
        z-index: 99;
    }
`;

const TextContainer = styled.div`
    width: 520px;
    background-color: #d8dbdb;
    color: #062b27;
    padding: 40px 60px;
    box-sizing: border-box;
`;

const Button = styled(RoundButton)`
    margin: 40px -40px 0 0;
`;

const HomeContactContainer = () => {
    return(
        <SectionContainer>
            <BoxContainer>
                <Image src={image} alt="" />
                <InfoContainer>
                    <a href="/contactanos"><Button buttonIcon="plus" buttonSize="large" /></a>
                    <TextContainer>
                        <Title color="#062b27" >CONTÁCTANOS</Title>
                        <p>
                            Ponte en contacto con nosotros si necesitas asesoria legal especializada. Nuestro equipo estará dispuesto a brindarte la mejor solución.
                        </p>
                    </TextContainer>
                </InfoContainer>
            </BoxContainer>
        </SectionContainer>
    );
}

export default HomeContactContainer;