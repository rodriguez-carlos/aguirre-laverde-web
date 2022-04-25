import styled from '@emotion/styled';

const Title = styled.h2`
    color: ${props => props.color || '#fff'};
    font-family: Regular;
    font-size: ${props => props.fontSize || '54px'};
    font-weight: 400;
    margin: 0 0 10px;
`

export default Title;