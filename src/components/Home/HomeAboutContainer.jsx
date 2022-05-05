import React from 'react';
import styled from '@emotion/styled';
import logo from '../../static/DEFINITIVOS-06.png';
import RoundButton from '../RoundButton';
import Circle from '../Circle';
import Title from '../Title';
import { Container } from '../Layout';

const Content = styled.div`
    display: flex;
    flex-direction: column-reverse;
    position: relative;

    @media (min-width: 960px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`;

const TextContainer = styled.div`
    background-color: #062B27;
    padding: 45px 35px;
    max-width: 500px;
    color: white;

    p {
        font-size: 20px;
    }

    @media (min-width: 960px) {
        width: 35%;
    }
`;

const ImageContainer = styled.div`
    background-color: #D8DBDB;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    height: 245.2px;

    @media (min-width: 960px) {
        height: 306.5px;
    }
`;

const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 25px;
    align-self: flex-end;
    margin-right: -20px;
    margin-top: -20px;

    p {
        margin-top: 30px;
        margin-right: 15px
    }

    @media (min-width: 960px) {
        align-self: center;
        margin-right: 0;
        margin-top: 0;

        p {
            margin-top: 20px;
        }
    }
`;

const Button = styled(RoundButton)`
    width: 82px;
    height: 82px;
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
                <a href="/conocenos"><Button buttonIcon="plus"/></a>
            </Actions>
        </Container>
    )
}

export default HomeAboutContainer;