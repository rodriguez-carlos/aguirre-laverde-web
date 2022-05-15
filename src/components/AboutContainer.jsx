import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Circle from './Circle';
import PartnerCard from './PartnerCard';
import Title from './Title';
import { Container } from './Layout';
import BackHomeButton from './BackHomeButton';
import { usePartners, useAboutPage } from '../context';

const SectionContainer = styled(Container)`
    padding: 0 0 60px;

    @media (min-width: 650px) {
        padding: 0;
    }
    
    @media (min-width: 960px) {
        padding: 120px 80px 30px;   
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
    background: #054340;
    padding: 80px 40px 100px;
    box-sizing: border-box;

    @media (min-width: 960px) {
        flex-direction: row;
        background: none;
        padding: 0;
        margin-bottom: 80px;
        width: auto;
        box-sizing: content-box;
    }
`;

const TeamContent = styled.div`
    background: linear-gradient(180deg, #326864 0%, #326864 25%, #ffffff 25%, #ffffff 53%, #326864 53%, #326864 78%, #ffffff 78%, #ffffff 100%);
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 60px 40px 60px;

    @media (min-width: 960px) {
        background: none;
    }

    @media (min-width: 1240px) {
        width: 1100px;
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
const FloatingEllipsisMobile = styled.div`
    position: absolute;
    top: 650px;
    right: 15px;
    font-size: 50px;
    color: #94A8A7;
    z-index: 99;

    @media (min-width: 650px) {
        display: none;
    }
`;
const TitleContainer = styled.div`
    display: flex;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    text-align: right;
    padding-top: 40px;

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
            font-size: 100px;
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
        width: 1100px;
    }
`;

const IntroContainer = styled.pre`
    white-space: pre-wrap;
    line-height: 1.5;
    font-size: 16px;

    @media (min-width: 1200px) {
      text-align: justify;
    }
`;


const AboutContainer = () => {
    const partnersData = usePartners();
    const aboutPageData = useAboutPage();

    if (!aboutPageData) return;

    return (
        <SectionContainer id="about-content">
            <Content>
                <FloatingEllipsisMobile><FontAwesomeIcon icon={faEllipsisVertical}/></FloatingEllipsisMobile>
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
                <Circle
                    color="#2a514d"
                    size="550px"
                    right="-275px"
                    top="200px"
                    mobile
                />
                <Circle
                    color="#50706d"
                    size="160px"
                    right="-80px"
                    top="590px"
                    mobile
                />
            <TextContainer>
                    <Title id="conocenos">{aboutPageData.attributes.titulo}</Title>
                    <IntroContainer>
                    {aboutPageData.attributes.parrafos.map(parrafo => (
                        <p key={parrafo.id}>
                            {parrafo.texto}
                        </p>
                    ))}
                    </IntroContainer>
                </TextContainer>
                <ImageContainer>
                    <Image
                        src={`${process.env.REACT_APP_HOST_URL}${aboutPageData.attributes.imagen.data.attributes.url}`}
                        alt=""
                    />
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
                <Circle
                    color="#5F8D88"
                    size="220px"
                    right="20px"
                    top="40px"
                    mobile
                />
                <Circle
                    color="#50706d"
                    size="300px"
                    left="-20px"
                    top="650px"
                    opacity="0.4"
                    mobile
                />
                <Circle
                    color="#F0F0F0"
                    size="230px"
                    right="0"
                    top="1450px"
                    opacity="0.5"
                    mobile
                />
                <Circle
                    color="#50706d"
                    size="320px"
                    right="-120px"
                    bottom="400px"
                    opacity="0.5"
                    mobile
                />
                <Circle
                    color="#EDF3F2"
                    size="180px"
                    left="10px"
                    bottom="10px"
                    mobile
                />
                <TitleContainer>
                    <FontAwesomeIcon icon={faEllipsis} size="xl" style={{ color: "#D8DBDB" }} />
                    <Title style={{textAlign: "right"}}>
                        NUESTRO EQUIPO
                    </Title>
                </TitleContainer>
                <PartnerCardsContainer>
                    {partnersData.map(partner => <PartnerCard key={partner.id} partner={partner.attributes}/>)}
                </PartnerCardsContainer>
            </TeamContent>
            <BackHomeButton />
        </SectionContainer>
    )
}

export default AboutContainer;