import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
    width: 100%;
    max-width: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    margin: 10px;
`;

const Image = styled.img`
    width: 100%;
    max-height: 400px;
    object-fit: cover;
`;

const Name = styled.p`
    font-family: "Bold";
    color: #054340 !important;
    line-height: 1 !important;
    font-size: 30px;
    margin: 5px 0;
`

const Text = styled.div`
    background-color: #D8DBDB;
    font-size: 16px;
    width: 100%;
    flex: 1;
    box-sizing: border-box;
    box-shadow: -4px 4px 12px #00000060;
    padding: 30px 25px;

    p {
        color: #3A4948;
        line-height: 1.5;
    }
`;

const PartnerCard = ({partner}) => {
    return (
        <Card>
            <Image src={partner.image}/>
            <Text>
                <Name>{partner.name}</Name>
                <Name>{partner.lastName}</Name>
                <p>{partner.bio}</p>
                <p><strong>Estudios: </strong>{partner.academics}</p>
            </Text>
        </Card>
    )
}

export default PartnerCard;