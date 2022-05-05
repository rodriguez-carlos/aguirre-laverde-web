import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import ServiceCard from './ServiceCard';
import Title from './Title';
import Circle from './Circle';
import { Container } from './Layout';

import servicesData from '../static/staticServicesData';

const SectionContainer = styled(Container)`
    position: relative;
    background: linear-gradient(180deg, #054340 22%, #326864 22%, #326864 44%, #FFFFFF 44%, #FFFFFF 59%, #326864 59%, #326864 79%, #FFFFFF 79%, #FFFFFF 90%, #326864 90%);

    @media (min-width: 960px) {
      padding-top: 180px;
      background: linear-gradient(180deg, #326864 62%, #FFFFFF 62%, #FFFFFF 71%);
    }
`;

const TitleContainer = styled.div`
    display: flex;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    text-align: right;
    padding-top: 40px;

    svg {
        margin-right: 10px;
    }

    @media (min-width: 650px) {
        font-size: 24px;
    }

    @media (min-width: 960px) {
        justify-content: flex-end;
        align-self: flex-end;
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
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 3rem 10px 0;

    @media (min-width: 960px) {
      margin: -4rem 0 3rem;
      max-width: 70%;
    }
`;

const ServiceDetailCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  width: 100%;

  @media (min-width: 960px) {
    flex-direction: row;
    margin-bottom: 100px;
  }
`;

const Card = styled(ServiceCard)`
  padding: 0;
  flex-direction: row;
  height: 150px;
  max-width: none;
  align-items: stretch;
  z-index: 1;

  img {
    width: 50%;
    z-index: 1;
  }

  @media (min-width: 960px) {
    flex-direction: column;
    height: 420px;
    align-items: center;

    img {
      width: 100%;
      z-index: 0;
    }
  }
`;

const ServiceDetailDescription = styled.div`
  background: #dfdfdf;
  padding: 20px;
  display: flex;
  align-items: center;
  flex: 1;

  @media (min-width: 960px) {
    margin: 30px 0;
    padding: 30px;
  }
`;

const DescriptionList = styled.ul`
  padding-inline-start: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // inner list
  ul {
    padding-inline-start: 5px;
    list-style-type: '-';
  }

  li {
    font-size: 14px;
    color: #062B27;
    padding-bottom: 5px;
  }

  @media (min-width: 960px) {
    padding-bottom: 10px;
  }
`;

const DescriptionListItem = styled.li`
  font-size: 14px;
  color: #062B27;
`;


const ServicesContainer = () => {
  const [data, setData] = useState(servicesData);

  return (
    <SectionContainer>
      <Circle
        color="#608e89"
        size="700px"
        top="90px"
        right="43%"
      />
      <Circle
        color="#2a514d"
        size="300px"
        top="47%"
        left="180px"
      />
      <Circle
        color="#EDF3F2"
        size="200px"
        top="67%"
        right="200px"
      />
      <Circle
        color="#487A76"
        size="300px"
        top="25%"
        right="150px"
      />
      <Circle
        color="#608e89"
        size="450px"
        bottom="150px"
        left="-20px"
        opacity="0.7"
      />
      <Circle
        color="#608e89"
        size="200px"
        bottom="100px"
        left="250px"
        opacity="0.3"
      />
      <Circle
        color="#487A76"
        size="200px"
        top="60px"
        left="10px"
        mobile
      />
      <Circle
        color="#608e89"
        size="250px"
        top="25%"
        right="10px"
        mobile
      />
      <Circle
        color="#608e89"
        size="120px"
        top="43%"
        right="20px"
        opacity="0.3"
        mobile
      />
      <Circle
        color="#A5B4B3"
        size="280px"
        top="50%"
        left="-50px"
        mobile
      />
      <Circle
        color="#50706d"
        size="230px"
        top="75%"
        right="-70px"
        opacity="0.5"
        mobile
      />
      <Circle
        color="#A5B4B3"
        size="120px"
        bottom="340px"
        left="10px"
        opacity="0.2"
        mobile
      />
      <Circle
        color="#A5B4B3"
        size="120px"
        bottom="10px"
        right="20px"
        opacity="0.4"
        mobile
      />
      <TitleContainer>
        <FontAwesomeIcon icon={faEllipsis} size="xl" style={{ color: "#3A4948" }} />
        <Title>
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
        {data.map(service => (
          <ServiceDetailCard>
            <Card image={service.image} text={service.text} />
            <ServiceDetailDescription>
              <DescriptionList>
                {service.itemList.map(item => {
                  return (
                    <>
                      <DescriptionListItem>{item.text}</DescriptionListItem>
                      {item.inner && (
                        <ul>
                          {item.inner.map(inner => <li>{inner}</li>)}
                        </ul>
                      )}
                    </>
                  )
                })}
              </DescriptionList>
            </ServiceDetailDescription>
          </ServiceDetailCard>
        ))}
      </CardsContainer>
    </SectionContainer>
  );
}

export default ServicesContainer;