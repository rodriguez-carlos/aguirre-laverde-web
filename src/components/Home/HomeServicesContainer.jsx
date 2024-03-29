import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import RoundButton from '../RoundButton';
import ServiceCard from '../ServiceCard';
import Title from '../Title';
import Circle from '../Circle';
import { Container } from '../Layout';
import { ServicesFixture } from '../../static/fixtures/index';


import { HashLink } from 'react-router-hash-link';

const SectionContainer = styled(Container)`
    position: relative;
    background: linear-gradient(180deg, rgba(50,104,100,1) 62%, rgba(255,255,255,1) 62%, rgba(255,255,255,1) 71%);
    padding-top: 20px;
`;

const TitleContainer = styled.div`
    display: flex;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    text-align: right;
    padding-top: 80px;

    svg {
        margin-right: 10px;

        @media (min-width: 960px) {
            font-size: 100px;
        }
    }

    @media (min-width: 650px) {
        font-size: 24px;
    }

    @media (min-width: 960px) {
        justify-content: flex-end;
        width: 65%;
        font-size: 30px;
        padding-top: 0;

        svg {
            margin-right: 30px;
        }
    }
`;

const IntroContainer = styled.div`
    background-color: #062B27;
    padding: 25px 35px 80px;
    color: #fff;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 10px;

    @media (min-width: 650px) {
        margin: 0;
        padding-top: 45px;
        
        p {
            font-size: 20px;
        }
    }

    @media (min-width: 960px) {
        width: 65%;
        max-width: 1000px;
        min-width: 807px;
        flex-direction: row;

        p:first-of-type {
            margin-right: 20px;
            flex: 1 1 50%;
        }

        p:last-of-type {
            margin-left: 20px;
            flex: 1 1 50%;
        }
    }
`;

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: space-between;
    flex-wrap: wrap;
    min-width: 350px;
    margin: 0;
    margin-bottom: 2rem;
    margin-top: -4rem;

    a {
        text-decoration: none;
    }

    @media (min-width: 960px) {
        max-width: 75%;
    }

    @media (min-width: 1700px) {
        max-width: 60%;
    }
`;

const CardLink = styled(HashLink)`
    flex: 1 1 50%;
    display: flex;
    justify-content: center;

    @media (min-width: 960px) {
        flex: auto;
    }
`;

const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #124D4A;
    font-size: 25px;
    margin: 30px 0;

    p {
        margin-right: 15px
    }
`;

const HomeServicesContainer = () => {
    const servicesData = ServicesFixture;

    return (
        <SectionContainer>
            <Circle
                color="#5F8D88"
                size="700px"
                top="90px"
                right="43%"
            />
            <Circle
                color="#a5b4b3"
                size="300px"
                bottom="180px"
                right="150px"
            />
            <Circle
                color="#608e89"
                size="250px"
                top="50px"
                left="5px"
                mobile
            />
            <Circle
                color="#a5b4b3"
                size="130px"
                bottom="130px"
                right="10px"
                mobile
            />
            <TitleContainer>
                <FontAwesomeIcon icon={faEllipsis} size="xl" style={{ color: "#3A4948"}} />
                <Title>
                    ¿QUÉ HACEMOS?
                </Title>
            </TitleContainer>
            <IntroContainer>
                <p>Escuchamos a nuestros clientes y
                les brindamos soluciones legales de
                acuerdo a sus necesidades. Los
                asesoramos y representamos en
                litigios judiciales y arbitrales.</p>
                <p>Realizamos consultorías,
                capacitaciones, gestiones ante
                autoridades y proyectos especiales.
                Desarrollamos estrategias legales
                que permiten dar solución efectiva a
                los problemas de nuestros clientes.</p>
            </IntroContainer>
            <CardsContainer>
                {servicesData.map(item => (
                    <CardLink key={item.id} to={`/que-hacemos#${item.nombre
                        .replaceAll(" ", "-")
                        .toLowerCase()
                    }`}>
                        <ServiceCard
                            key={item.id}
                            image={item.imagen}
                            text={item.nombre}
                        />
                    </CardLink>
                ))}
            </CardsContainer>
            <Actions>
                <p>Más de ¿QUÉ HACEMOS?</p>
                <HashLink to="/que-hacemos#que-hacemos"><RoundButton buttonIcon="plus"/></HashLink>
            </Actions>
        </SectionContainer>
    );
}

export default HomeServicesContainer;