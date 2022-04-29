import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import RoundButton from './RoundButton';
import ServiceCard from './ServiceCard';
import Title from './Title';
import Circle from './Circle';
import { Container } from './Layout';

import servicesData from '../static/staticServicesData';

const SectionContainer = styled(Container)`
    position: relative;
    background: linear-gradient(180deg, rgba(50,104,100,1) 62%, rgba(255,255,255,1) 62%, rgba(255,255,255,1) 71%);
`;

const TitleContainer = styled.div`
    display: flex;
    font-size: 50px;
    justify-content: flex-end;
    text-align: right;
    width: 65%;

    svg {
        margin: 0 40px;
    }
`;

const IntroContainer = styled.div`
    background-color: #062B27;
    padding: 45px 35px 80px;
    color: #fff;
    display: flex;
    width: 65%;

    p {
      font-size: 18px;
    }

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
    max-width: 70%;
    margin: auto;
    margin-bottom: 2rem;
    margin-top: -4rem;
`;

const ServiceDetailCard = styled.div`
  display: flex;
  margin-bottom: 100px;
`;

const Card = styled(ServiceCard)`
  padding: 0;
`;

const ServiceDetailDescription = styled.div`
  background: #dfdfdf;
  margin: 30px 0;
  padding: 30px;
  display: flex;
  align-items: center;
`;

const DescriptionList = styled.ul`
  padding-inline-start: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  // inner list
  ul {
    padding-inline-start: 20px;
    list-style-type: '-';
  }

  li {
    font-size: 14px;
    color: #062B27;
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
        size="650px"
        top="40px"
        right="50%"
      />
      <Circle
        color="#2a514d"
        size="300px"
        top="50%"
        right="80px"
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