import React from "react";
import styled from "@emotion/styled";
import RoundButton from './RoundButton';

const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #124D4A;
    font-size: 25px;
    margin: 10px 0 60px;

    p {
        margin-right: 15px;
    }

    @media (min-width: 960px) {
      height: 150px;
    }
`;

const BackHomeButton = () => {
  return (
    <Actions>
      <p>Volver al HOME</p>
      <a href="/"><RoundButton buttonIcon="back" /></a>
    </Actions>
  );
}

export default BackHomeButton;