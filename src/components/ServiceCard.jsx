import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
    height: 420px;
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 1.5%;
    box-sizing: border-box;
`;

const Image = styled.img`
    width: 100%;
    height: 280px;
    flex: 2;
`;

const Title = styled.div`
    background-color: #D8DBDB;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    width: 100%;
    padding: 10px 20px;
    flex: 1;
    box-sizing: border-box;
    box-shadow: -4px 4px 12px #00000060;

    p {
        text-align: center;
        color: #3A4948;
    }
`;

const ServiceCard = ({ image, text }) => {
    return (
        <Card>
            <Image src={image} alt={text} />
            <Title>
                <p>{text}</p>
            </Title>
        </Card>
    )
}

export default ServiceCard;