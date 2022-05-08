import styled from '@emotion/styled';

export const Container = styled.section`
    overflow: hidden;
    background-color: ${props => props.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 40px 20px;

    @media (min-width: 650px) {
        padding: 140px 80px 80px;
    }
`;