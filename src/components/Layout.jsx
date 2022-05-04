import styled from '@emotion/styled';

export const Container = styled.section`
    overflow: hidden;
    background-color: ${props => props.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 20px 20px;

    @media (min-width: 440px) {
        padding: 80px 40px 40px;
    }

    @media (min-width: 650px) {
        padding: 120px 80px 80px;
    }
`;