import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import RoundButton from './RoundButton';

const CarouselItemContainer = styled.div`
    height: 50vh;
    display: flex;
    position: relative;
    margin: auto;

    @media (min-width: 650px) {
        height: 75vh;
    }
`;

const CarouselItemImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const CarouselItemBox = styled.div`
    background-color: rgba(7, 71, 68, 0.75);
    width: 65%;
    height: 100%;
    position: absolute;
    right: 0;

    @media (min-width: 650px) {
        width: 45%;
    }

    @media (min-width: 1240px) {
        width: 30%;
    }
`;

const CarouselItemBoxContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`;

const CarouselItemBoxTextImage = styled.img`
    width: 200px !important;
    margin-bottom: 10px;
    text-align: center;
    filter: brightness(2.0);

    @media (min-width: 650px) {
        width: 350px !important;
    }
`;

const CarouselItemActions = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    (Link) {
        display: block;
        text-decoration: none;
        width: 85px;
        color: #fff;
    }

    span {
        font-size: 24px;
        margin-left: 15px;
        color: #fff;
    }

    @media (min-width: 650px) {
        font-size: 33px;

        span {
            margin-left: 35px;
        }
    }
`;

const CarouselItemButton = styled(RoundButton)`
    @media (max-width: 650px) {
        width: 40px;
        height: 40px;
    }
`;

const CarouselItem = ({carouselSlideData}) => {
    return (
        <CarouselItemContainer>
            <CarouselItemImage src={carouselSlideData.carouselSlideImg} alt="" />
            <CarouselItemBox>
                <CarouselItemBoxContent>
                    <CarouselItemBoxTextImage src={carouselSlideData.carouselSlideTextImage} alt={carouselSlideData.carouselSlideText} />
                    <CarouselItemActions>
                        <Link to={carouselSlideData.carouselSlideButtonRoute}>
                            <CarouselItemButton buttonIcon="plus" />
                        </Link>
                        <span>{carouselSlideData.carouselSlideButton}</span>
                    </CarouselItemActions>
                </CarouselItemBoxContent>
            </CarouselItemBox>
        </CarouselItemContainer>
    )
}

export default CarouselItem;