import React from "react";
import styled from "@emotion/styled";
import RoundButton from './RoundButton';

const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #124D4A;
    font-size: 25px;
    margin: 30px 0 60px;
    height: 150px;

    p {
        margin-right: 15px;
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