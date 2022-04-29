import React from 'react';
import styled from '@emotion/styled';
import logo from '../../static/DEFINITIVOS-06.png';
import RoundButton from '../RoundButton';
import Circle from '../Circle';
import Title from '../Title';
import { Container } from '../Layout';

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const TextContainer = styled.div`
    background-color: #062B27;
    padding: 45px 35px;
    width: 35%;
    max-width: 500px;
    color: white;
`;

const ImageContainer = styled.div`
    background-color: #D8DBDB;
`;

const Image = styled.img`
    height: 306.5px;
`;

const Actions = styled.div`
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 25px;

    p {
        margin-right: 15px
    }
`;

const HomeAboutContainer = () => {
    return (
        <Container color="#054340">
            <Content>
                <Circle
                    color="#2a514d"
                    size="500px"
                    left="55%"
                    top="-40px"
                />
                <Circle
                    color="#50706d"
                    size="250px"
                    left="45%"
                    top="50%"
                />
                <TextContainer>
                    <Title>CONÓCENOS</Title>
                    <div>
                        <p>
                            Somos  una  firma  de  abogados  con experiencia  y  conocimiento  especializado  que brinda a sus clientes asesoría jurídica integral, oportuna y confiable.
                        </p>
                        <p>
                            Las   áreas   más   relevantes   de   nuestra   practica  incluyen  responsabilidad  civil  y seguros, derecho comercial y corporativo, derecho de familia, derecho inmobiliario y derecho penal.
                        </p>
                        <p>
                            Buscamos crear relaciones de largo plazo integrando  el  conocimiento  legal  con  el entendimiento   de   los   negocios   de nuestros   clientes,   sus   objetivos   y desafíos...
                        </p>
                    </div>
                </TextContainer>
                <ImageContainer>
                    <Image src={logo} alt="" />
                </ImageContainer>
            </Content>
            <Actions>
                <p>Más de CONÓCENOS</p>
                <a href="/conocenos"><RoundButton buttonIcon="plus"/></a>
            </Actions>
        </Container>
    )
}

export default HomeAboutContainer;