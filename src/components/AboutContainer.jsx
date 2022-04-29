import React, {useState} from 'react';
import styled from '@emotion/styled';
import image from '../static/VERSION-MOBIL-15.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import RoundButton from './RoundButton';
import Circle from './Circle';
import PartnerCard from './PartnerCard';
import Title from './Title';
import { Container } from './Layout';
import partnerData from '../static/partnerData';

const SectionContainer = styled(Container)`
    background: linear-gradient(180deg, #054340 0, #054340 20%, #326864 20%, #326864 60%, #ffffff 60%, #ffffff 100%);
    position: relative;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 80px;
    position: relative;
`;

const TextContainer = styled.div`
    background-color: #062B27;
    padding: 45px 35px;
    width: 35%;
    max-width: 500px;
    color: white;
`;

const TitleContainer = styled.div`
    display: flex;
    font-size: 50px;
    justify-content: flex-end;
    text-align: right;
    width: 100%;

    svg {
        margin: 0 40px;
    }
`;

const Image = styled.img`
    height: 306.5px;
`;

const Actions = styled.div`
    display: flex;
    justify-content: center;
    color: #124D4A;
    font-size: 25px;
    margin: 30px 0;

    p {
        margin-right: 15px;
    }
`;

const AboutContainer = () => {
    const [data, setData] = useState(partnerData);

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
                <Image src={image} />
            </Content>
            <div style={{display: "flex", flexDirection: "column", width: "70%"}}>
                <TitleContainer>
                    <Title style={{textAlign: "right"}}>
                        <FontAwesomeIcon icon={faEllipsis} size="xl" style={{ color: "#3A4948" }} />
                        NUESTRO EQUIPO
                    </Title>
                </TitleContainer>
                <div style={{display: "flex", alignItems: 'stretch', justifyContent: 'space-between',}}>
                    {data.map(partner => <PartnerCard partner={partner}/>)}
                </div>
            </div>
            <Actions>
                <p>Volver al HOME</p>
                <a href="/"><RoundButton buttonIcon="back"/></a>
            </Actions>
        </SectionContainer>
    )
}

export default AboutContainer;