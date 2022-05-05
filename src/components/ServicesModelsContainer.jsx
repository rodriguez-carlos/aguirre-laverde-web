import React from "react";
import styled from "@emotion/styled";
import { Container } from './Layout';
import Title from './Title';
import Circle from './Circle';
import ServiceModelCard from './ServiceModelCard';
import BackHomeButton from './BackHomeButton';
import data from '../static/staticServicesModelsData';

const SectionContainer = styled(Container)`
    position: relative;
    background: linear-gradient(180deg, rgba(5, 67, 64, 1) 32%, rgba(255,255,255,1) 32%, rgba(255,255,255,1) 71%);
    padding-top: 80px;

    @media (min-width: 960px) {
      background: linear-gradient(180deg, rgba(5, 67, 64, 1) 62%, rgba(255,255,255,1) 62%, rgba(255,255,255,1) 71%);
      padding-top: 180px;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    font-size: 50px;
    text-align: left;
    width: 100%;
    margin-left: 40px;

    @media (min-width: 960px) {
      width: 960px;
      margin-left: 0;
    }
`;

const CardsContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    justify-content: center;
    margin-bottom: 40px;

    @media (min-width: 960px) {
      width: 960px;
      margin-top: 60px;
    }
`;

const ServicesModelsContainer = () => {
  return (
    <SectionContainer>
      <Circle
        color="#487A76"
        size="150px"
        top="50px"
        right="20px"
        opacity="0.5"
        mobile
      />
      <Circle
        color="#A5B4B3"
        size="180px"
        bottom="130px"
        left="10px"
        opacity="0.5"
        mobile
      />
      <TitleContainer>
        <Title>
          Modelos de Servicio
        </Title>
      </TitleContainer>
      <CardsContainer>
        <Circle
          color="#245C59"
          size="450px"
          top="-180px"
          right="-100px"
        />
        <Circle
          color="#D2DAD9"
          size="200px"
          bottom="-70px"
          left="-110px"
        />
        {data.map(item => (
          <ServiceModelCard title={item.title} text={item.text} />
        ))}
      </CardsContainer>
      <BackHomeButton />
    </SectionContainer>
  );
};

export default ServicesModelsContainer;