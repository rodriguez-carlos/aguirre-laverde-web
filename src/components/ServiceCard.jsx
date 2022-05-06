import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
    height: 270px;
    max-width: 165px;
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 1.5%;
    box-sizing: border-box;

    @media (min-width: 960px) {
        height: 420px;
        max-width: 320px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;

    @media (min-width: 960px) {
        height: 240px;
    }
`;

const Title = styled.div`
    background-color: #D8DBDB;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    flex: 1;
    box-sizing: border-box;
    box-shadow: -4px 4px 12px #00000060;

    p {
        text-align: center;
        color: #3A4948;
        line-height: 20px;
        margin: 0;
    }

    @media (min-width: 960px) {
        p {
            font-size: 26px;
            line-height: 30px;
        }
    }
`;

const ServiceCard = ({ image, text, className }) => {
    return (
        <Card className={className} id={text.replaceAll(" ", "-").toLowerCase()}>
            <Image src={image} alt={text}/>
            <Title>
                <p>{text}</p>
            </Title>
        </Card>
    )
}

export default ServiceCard;