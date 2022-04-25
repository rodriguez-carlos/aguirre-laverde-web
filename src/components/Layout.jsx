import styled from '@emotion/styled';

export const Container = styled.section`
    background-color: ${props => props.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 80px 80px;
`;