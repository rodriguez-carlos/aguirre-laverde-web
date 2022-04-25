import React from 'react';
import styled from '@emotion/styled';
import logo from '../../static/DEFINITIVOS-06.png';
import RoundButton from '../RoundButton';
import Circle from '../Circle';
import Title from '../Title';

const Container = styled.section`
    background-color: #054340;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
    position: relative;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const TextContainer = styled.div`
    background-color: #062B27;
    color: #fff;
    width: 35%;
    max-width: 500px;
    padding: 45px 35px;
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
`;

const HomeAboutContainer = () => {
    return (
        <Container>
            <Circle
                color="#2a514d"
                size="40vw"
                left="50%"
            />
            <Circle
                color="#50706d"
                size="20vw"
                left="40%"
                top="50%"
            />
            <Content>
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
                <p>Más de conócenos</p>
                <RoundButton buttonIcon="plus"/>
            </Actions>
        </Container>
    )
}

export default HomeAboutContainer;