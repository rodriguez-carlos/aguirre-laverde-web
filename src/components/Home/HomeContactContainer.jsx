import React from "react";
import styled from '@emotion/styled';
import image from '../../static/imagenes-20.png';
import RoundButton from "../RoundButton";
import Circle from "../Circle";
import { Container } from '../Layout';
import Title from '../Title';

const SectionContainer = styled(Container)`
    position: relative;
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
    width: 100%;
    position: relative;

    @media (min-width: 1240px) {
        width: 1000px;
    }
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
    width: 200px;
    background-color: #d8dbdb;
    color: #062b27;
    padding: 40px 60px;
    box-sizing: border-box;

    @media (min-width: 650px) {
        width: 520px;
    }
`;

const Button = styled(RoundButton)`
    margin: 40px -40px 0 0;
`;

const HomeContactContainer = () => {
    return(
        <SectionContainer>
            <Circle
                color="#50706d"
                size="400px"
                left="50%"
                top="80px"
            />
            <Circle
                color="#a5b4b3"
                size="200px"
                left="55%"
                top="60%"
            />
            <BoxContainer>
                <Image src={image} alt="" />
                <InfoContainer>
                    <a href="/contacto"><Button buttonIcon="plus" buttonSize="large" /></a>
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