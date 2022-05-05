import React from "react";
import styled from '@emotion/styled';
import image from '../../static/imagenes-20.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import RoundButton from "../RoundButton";
import Circle from "../Circle";
import { Container } from '../Layout';
import Title from '../Title';

const SectionContainer = styled(Container)`
    position: relative;
    background: linear-gradient(180deg, rgba(5,67,64,1) 64%, rgba(255,255,255,1) 64%, rgba(255,255,255,1) 71%);

    @media (min-width: 650px) {
        padding-bottom: 120px;
        padding-top: 180px;
    }
`;

const FloatingEllipsis = styled.div`
    position: absolute;
    top: 120px;
    right: 29%;
    font-size: 100px;
    color: #628785;
`

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 200px;
    max-width: 90%;

    @media (min-width: 650px) {
        height: 300px;
    }

    @media (min-width: 960px) {
        height: 400px;
    }
`;

const BoxContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    position: relative;

    @media (min-width: 1240px) {
        width: 1000px;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    margin: 50px 0;

    a {
        z-index: 99;
    }
`;

const SectionTitle = styled(Title)`
    font-size: 28px;

    @media (min-width: 650px) {
        font-size: 36px;
    }
`;

const TextContainer = styled.div`
    box-sizing: border-box;
    background-color: #d8dbdb;
    color: #062b27;
    padding: 40px;
    max-width: 360px;

    @media (min-width: 960px) {
        width: 520px;
        max-width: none;
        padding: 40px 60px;
    }
`;

const Button = styled(RoundButton)`
    margin: 40px -30px 0 0;
`;

const HomeContactContainer = () => {
    return(
        <SectionContainer>
            <Circle
                color="#16514E"
                size="400px"
                left="50%"
                top="80px"
            />
            <Circle
                color="#A5B4B3"
                size="200px"
                left="55%"
                top="57%"
            />
            <FloatingEllipsis><FontAwesomeIcon icon={faEllipsis} /></FloatingEllipsis>
            <BoxContainer>
                <Image src={image} alt="" />
                <InfoContainer>
                    <a href="/contacto"><Button buttonIcon="plus" buttonSize="large" /></a>
                    <TextContainer>
                        <SectionTitle color="#062b27">CONTÁCTANOS</SectionTitle>
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