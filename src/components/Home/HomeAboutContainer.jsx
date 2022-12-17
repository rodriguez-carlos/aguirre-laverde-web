import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';
import { faEllipsis, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import RoundButton from '../RoundButton';
import Circle from '../Circle';
import Title from '../Title';
import { Container } from '../Layout';
import imagenFamilia from '../../static/images/imagenes-16.png'

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

const FloatingEllipsis = styled.div`
    position: absolute;
    top: 420px;
    right: 39%;
    font-size: 80px;
    color: #94A8A7;

    @media (max-width: 650px) {
        display: none;
    }

`;

const FloatingEllipsisMobile = styled.div`
    position: absolute;
    top: 675px;
    right: -20px;
    font-size: 50px;
    color: #94A8A7;
    z-index: 99;

    @media (min-width: 650px) {
        display: none;
    }
`;

const TextContainer = styled.div`
    background-color: #062B27;
    padding: 45px 35px;
    max-width: 500px;
    color: white;

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
        margin-right: 150px;
        margin-top: -30px;

        p {
            margin-top: 40px;
        }
    }
`;

const Button = styled(RoundButton)`
    width: 100px;
    height: 100px;
`;

const IntroContainer = styled.pre`
    white-space: pre-wrap;
    line-height: 1.5;
    font-size: 16px;

    @media (min-width: 1200px) {
      text-align: justify;
    }
`;

const HomeAboutContainer = () => {

    return (
        <Container color="#054340">
            <Content>
                <FloatingEllipsisMobile><FontAwesomeIcon icon={faEllipsisVertical} /></FloatingEllipsisMobile>
                <Circle
                    color="#29514d"
                    size="500px"
                    left="55%"
                    top="0"
                />
                <Circle
                    color="#50706d"
                    size="250px"
                    left="45%"
                    top="50%"
                />
                <Circle
                    color="#2a514d"
                    size="600px"
                    right="-300px"
                    top="200px"
                    mobile
                />
                <Circle
                    color="#50706d"
                    size="160px"
                    right="-125px"
                    top="620px"
                    mobile
                />
                <TextContainer>
                    <Title>CONÓCENOS</Title>
                    <IntroContainer>
                        <p>Somos una firma de abogados con
                        experiencia y conocimiento
                        especializado que brinda a sus
                        clientes asesoría jurídica integral,
                        oportuna y confiable.</p>
                        <p>Las áreas más relevantes de
                        nuestra practica incluyen
                        responsabilidad civil y seguros,
                        derecho comercial y corporativo,
                        derecho de familia, derecho
                        inmobiliario y derecho penal.</p>
                        <p>Buscamos crear relaciones de largo
                        plazo integrando el conocimiento
                        legal con el entendimiento de los
                        negocios de nuestros clientes, sus
                        objetivos y desafíos...</p>
                    </IntroContainer>
                </TextContainer>
                <ImageContainer>
                    <FloatingEllipsis><FontAwesomeIcon icon={faEllipsis} /></FloatingEllipsis>
                    <Image
                        src={imagenFamilia}
                        alt=""
                    />
                </ImageContainer>
            </Content>
            <Actions>
                <p>Más de CONÓCENOS</p>
                <HashLink to="/conocenos#conocenos"><Button buttonIcon="plus"/></HashLink>
            </Actions>
        </Container>
    )
}

export default HomeAboutContainer;