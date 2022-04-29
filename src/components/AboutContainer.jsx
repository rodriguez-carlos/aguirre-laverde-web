import React, {useState} from 'react';
import styled from '@emotion/styled';
import image from '../static/VERSION-MOBIL-15.jpg';
import PartnerCard from './PartnerCard';
import Title from './Title';
import { Container } from './Layout';
import partnerData from '../static/partnerData';

const SectionContainer = styled(Container)`
    background: linear-gradient(180deg, #054340 0, #054340 20%, #326864 20%, #326864 60%, #ffffff 60%, #ffffff 100%);
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const TextContainer = styled.div`
    background-color: #062B27;
    padding: 45px 35px;
    width: 35%;
    max-width: 500px;
    color: white;
`;
const Image = styled.img`
    height: 306.5px;
`;

const AboutContainer = () => {
    const [data, setData] = useState(partnerData);

    return (
        <SectionContainer>
            <Content>
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
            <Content>
                {data.map(partner => <PartnerCard partner={partner}/>)}
            </Content>
        </SectionContainer>
    )
}

export default AboutContainer;