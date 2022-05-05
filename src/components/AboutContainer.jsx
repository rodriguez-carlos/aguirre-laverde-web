import React, {useState} from 'react';
import styled from '@emotion/styled';
import image from '../static/VERSION-MOBIL-15.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import Circle from './Circle';
import PartnerCard from './PartnerCard';
import Title from './Title';
import { Container } from './Layout';
import partnerData from '../static/partnerData';

const SectionContainer = styled(Container)`
    padding: 0;

    @media (min-width: 650px) {
        padding: 0;
    }
    
    @media (min-width: 960px) {
        padding: 120px 80px 80px;   
        background: linear-gradient(180deg, #054340 0, #054340 20%, #326864 20%, #326864 60%, #ffffff 60%, #ffffff 100%);
    }
`

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    position: relative;
    position: relative;
    background: #054340;
    padding: 80px 40px 100px;

    @media (min-width: 960px) {
        flex-direction: row;
        background: none;
        padding: 0;
        margin-bottom: 80px;
        width: auto;
    }
`;

const TeamContent = styled.div`
    background: linear-gradient(180deg, #326864 0%, #326864 25%, #ffffff 25%, #ffffff 50%, #326864 50%, #326864 75%, #ffffff 75%, #ffffff 100%);
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 60px 40px 20px;

    @media (min-width: 960px) {
        width: 70%;
        background: none;
    }
`;

const TextContainer = styled.div`
    background-color: #062B27;
    padding: 45px 35px;
    max-width: 500px;
    color: white;

    @media (min-width: 960px) {
        width: 35%;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    text-align: right;

    svg {
        margin-right: 10px;
    }

    @media (min-width: 650px) {
        font-size: 24px;
    }

    @media (min-width: 960px) {
        justify-content: flex-end;
        align-self: flex-end;
        width: 65%;
        font-size: 30px;
        padding-top: 0;

        svg {
            margin-right: 30px;
        }
    }
`;

const ImageContainer = styled.div`
    background-color: #D8DBDB;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 100%;
    max-width: 570px;

    @media (min-width: 960px) {
        height: 306.5px;
    }
`;

const PartnerCardsContainer = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;

    @media (min-width: 960px) {
        justify-content: space-between;
    }

    @media (min-width: 1240px) {
        width: 1000px;
    }
`;


const AboutContainer = () => {
    const [data] = useState(partnerData);

    return (
        <SectionContainer>
            <Content>
                <Circle
                    color="#2a514d"
                    size="530px"
                    left="55%"
                    top="-40px"
                />
                <Circle
                    color="#50706d"
                    size="250px"
                    left="40%"
                    top="0px"
                />
            <TextContainer>
                    <Title>CONÓCENOS</Title>
                    <div>
                        <p>
                            Somos  una  firma  de  abogados  con experiencia  y  conocimiento  especializado  que brinda a sus clientes asesoría jurídica integral, oportuna y confiable.
                        </p>
                        <p>
                            Las   áreas   más   relevantes   de   nuestra   practica  incluyen  responsabilidad  civil  y seguros, derecho comercial y corporativo, derecho de familia, derecho inmobiliario y derecho penal.
                        </p>
                        <p>
                            Buscamos crear relaciones de largo plazo integrando  el  conocimiento  legal  con  el entendimiento   de   los   negocios   de nuestros   clientes,   sus   objetivos   y desafíos...
                        </p>
                    </div>
                </TextContainer>
                <ImageContainer>
                    <Image src={image} />
                </ImageContainer>
            </Content>
            <TeamContent>
                <Circle
                    color="#50706d"
                    size="250px"
                    right="-40px"
                    top="-20px"
                />
                <Circle
                    color="#F0F0F0"
                    size="500px"
                    left="-10%"
                    bottom="-10%"
                />
                <TitleContainer>
                    <FontAwesomeIcon icon={faEllipsis} size="xl" style={{ color: "#D8DBDB" }} />
                    <Title style={{textAlign: "right"}}>
                        NUESTRO EQUIPO
                    </Title>
                </TitleContainer>
                <PartnerCardsContainer>
                    {data.map(partner => <PartnerCard partner={partner}/>)}
                </PartnerCardsContainer>
            </TeamContent>
        </SectionContainer>
    )
}

export default AboutContainer;