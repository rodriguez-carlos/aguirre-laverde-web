import styled from '@emotion/styled';

const Title = styled.h2`
    color: ${props => props.color || '#fff'};
    font-family: Regular;
    font-size: 30px;
    font-weight: 400;
    margin: 0 0 10px;
    text-align: center;
    white-space: nowrap;

    @media (min-width: 650px) {
        font-size: ${props => props.fontSize || '54px'};
    }
`

export default Title;