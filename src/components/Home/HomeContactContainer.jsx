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
    background: linear-gradient(180deg, rgba(5,67,64,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 71%);

    @media (min-width: 960px) {
        padding-bottom: 120px;
        padding-top: 180px;
        background: linear-gradient(180deg, rgba(5,67,64,1) 64%, rgba(255,255,255,1) 64%, rgba(255,255,255,1) 71%);
    }
`;

const FloatingEllipsis = styled.div`
    position: absolute;
    top: 130px;
    right: 25%;
    font-size: 100px;
    color: #628785;
`

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    max-width: 450px;

    @media (min-width: 960px) {
        height: 400px;
        max-width: none;
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
    margin: 40px 0;
    width: 70%;
    max-width: 440px;

    a {
        z-index: 99;
    }

    @media (min-width: 960px) {
        max-width: 60%;
    }
`;

const SectionTitle = styled(Title)`
    font-size: 20px;

    @media (min-width: 650px) {
        font-size: 30px;
    }

    @media (min-width: 960px) {
        font-size: 36px;
    }
`;

const TextContainer = styled.div`
    box-sizing: border-box;
    background-color: #d8dbdb;
    color: #062b27;
    padding: 30px;
    max-width: 360px;
    text-align: center;

    p {
        margin-bottom: 0;
        font-size: 14px;
    }

    @media (min-width: 650px) {
        max-width: 400px;
        padding: 40px 60px;

        p {
            font-size: 22px;
        }
    }

    @media (min-width: 960px) {
        width: 520px;
        max-width: none;
    }
`;

const Button = styled(RoundButton)`
    margin: 10px -20px 0 0;

    @media (min-width: 960px) {
        margin-top: 40px;
    }
`;

const HomeContactContainer = () => {
    return(
        <SectionContainer>
            <Circle
                color="#16514E"
                size="400px"
                left="60%"
                top="80px"
            />
            <Circle
                color="#A5B4B3"
                size="200px"
                left="62%"
                top="61%"
            />
            <Circle
                color="#50706d"
                size="160px"
                left="55%"
                top="30px"
                mobile
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