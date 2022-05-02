import React from "react";
import styled from "@emotion/styled";
import { Container } from './Layout';
import Title from './Title';
import ServiceModelCard from './ServiceModelCard';
import data from '../static/staticServicesModelsData';

const SectionContainer = styled(Container)`
    position: relative;
    background: linear-gradient(180deg, rgba(5, 67, 64, 1) 62%, rgba(255,255,255,1) 62%, rgba(255,255,255,1) 71%);
    padding-top: 180px;
`;

const TitleContainer = styled.div`
    display: flex;
    font-size: 50px;
    text-align: left;
    width: 960px;
`;

const CardsContainer = styled.div`
    width: 960px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
`;

const ServicesModelsContainer = () => {
  return (
    <SectionContainer>
      <TitleContainer>
        <Title>
          Modelos de Servicio
        </Title>
      </TitleContainer>
      <CardsContainer>
        {data.map(item => (
          <ServiceModelCard title={item.title} text={item.text} />
        ))}
      </CardsContainer>
    </SectionContainer>
  );
};

export default ServicesModelsContainer;