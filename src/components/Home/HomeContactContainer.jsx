import React from "react";
import styled from '@emotion/styled';
import image from '../../static/imagenes-20.png';
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

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 200px;
    max-width: 90%;

    @media (min-width: 650px) {
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
`;

const TextContainer = styled.div`
    box-sizing: border-box;
    background-color: #d8dbdb;
    color: #062b27;
    padding: 40px;

    @media (min-width: 650px) {
        width: 520px;
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