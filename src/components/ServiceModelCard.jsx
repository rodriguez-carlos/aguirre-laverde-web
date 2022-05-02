import React from "react";
import styled from "@emotion/styled";

const CardContainer = styled.div`
  flex: 1 0 30%;
  margin: 15px 10px;

  :last-of-type {
    flex: 1 0 63.3%;
  }
`;

const CardTitle = styled.div`
  background-color: #326864;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 28px;
  color: white;
`;

const CardText = styled.div`
  background-color: #dfdfdf;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  color: #3A4948;
  padding: 20px 40px;
  box-shadow: -4px 4px 12px #00000060;
`;

const ServiceModelCard = ({ title, text }) => {
  return (
    <CardContainer>
      <CardTitle>
        <pre>
          {title}
        </pre>
      </CardTitle>
      <CardText>
        {text}
      </CardText>
    </CardContainer>
  )
};

export default ServiceModelCard;