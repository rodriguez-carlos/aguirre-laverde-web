import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import RoundButton from '../RoundButton';
import ServiceCard from '../ServiceCard';
import Title from '../Title';
import Circle from '../Circle';
import { Container } from '../Layout';

import servicesData from '../../static/staticServicesData';

const SectionContainer = styled(Container)`
    position: relative;
    background: linear-gradient(180deg, rgba(50,104,100,1) 56%, rgba(255,255,255,1) 56%, rgba(255,255,255,1) 71%);
`;

const TitleContainer = styled.div`
    display: flex;
    font-size: 50px;
    justify-content: flex-end;
    text-align: right;
    width: 80%;

    svg {
        margin: 0 40px;
    }
`;

const IntroContainer = styled.div`
    background-color: #062B27;
    padding: 45px 35px 80px;
    color: #fff;
    display: flex;
    width: 80%;

    p:first-of-type {
        margin-right: 20px;
        flex: 1 1 50%;
    }

    p:last-of-type {
        margin-left: 20px;
        flex: 1 1 50%;
    }
`;

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 80%;
    margin: auto;
    margin-bottom: 2rem;
    margin-top: -4rem;
`;

const Actions = styled.div`
    display: flex;
    justify-content: center;
    color: #124D4A;
    font-size: 25px;
    margin: 40px 0;
`;

const HomeServicesContainer = () => {
    const [data, setData] = useState(servicesData);

    return (
        <SectionContainer>
            <Circle
                color="#608e89"
                size="600px"
                top="40px"
                left="80px"
            />
            <Circle
                color="#a5b4b3"
                size="300px"
                bottom="180px"
                right="150px"
            />
            <TitleContainer>
                <Title>
                    <FontAwesomeIcon icon={faEllipsis} size="xl" style={{ color: "#3A4948" }} />
                    ¿QUÉ HACEMOS?
                </Title>
            </TitleContainer>
            <IntroContainer>
                <p>
                    Escuchamos  a  nuestros  clientes  y  les  brindamos soluciones legales de acuerdo a  sus  necesidades.  Los  asesoramos  y representamos  en  litigios  judiciales  y arbitrales.   
                </p>
                <p>
                    Realizamos consultorías, capacitaciones, gestiones  ante  autoridades  y  proyectos especiales.    Desarrollamos  estrategias legales que permiten dar solución efectiva a los problemas de nuestros clientes.
                </p>
            </IntroContainer>
            <CardsContainer>
                {data.map(item => <ServiceCard image={item.image} text={item.text} />)}
            </CardsContainer>
            <Actions>
                <p>Más de ¿QUÉ HACEMOS?</p>
                <RoundButton buttonIcon="plus"/>
            </Actions>
        </SectionContainer>
    );
}

export default HomeServicesContainer;