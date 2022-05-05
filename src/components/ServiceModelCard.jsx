import React from "react";
import styled from "@emotion/styled";

const CardContainer = styled.div`
  flex: 1 1 45%;
  margin: 5px;

  :last-of-type {
    flex: 1 0 95%;
  }

  @media (min-width: 960px) {
    margin: 15px 10px;
    flex: 1 0 30%;

    :last-of-type {
      flex: 1 0 63.3%;
    }
  }
`;

const CardTitle = styled.div`
  background-color: #326864;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  color: white;

  @media (min-width: 960px) {
    height: 120px;
    font-size: 28px;
  }
`;

const CardText = styled.div`
  background-color: #dfdfdf;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  color: #3A4948;
  padding: 20px 15px;
  box-shadow: -4px 4px 12px #00000060;
  min-height: 100px;

  @media (min-width: 960px) {
    padding: 20px 40px;
    height: 120px;
  }
`;

const ServiceModelCard = ({ title, text }) => {
  return (
    <CardContainer>
      <CardTitle>
        {title}
      </CardTitle>
      <CardText>
        {text}
      </CardText>
    </CardContainer>
  )
};

export default ServiceModelCard;