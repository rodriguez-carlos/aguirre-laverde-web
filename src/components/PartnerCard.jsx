import React from "react";
import styled from "@emotion/styled";

const Card = styled.div`
    height: 500px;
    max-width: 290px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
`;

const Image = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
`;

const Name = styled.p`
    font-family: "Bold";
    color: #054340;
    font-size: 30px;
`

const Text = styled.div`
    background-color: #D8DBDB;
    font-size: 16px;
    width: 100%;
    flex: 1;
    box-sizing: border-box;
    box-shadow: -4px 4px 12px #00000060;

    p {
        text-align: left;
        color: #3A4948;
        line-height: 30px;
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