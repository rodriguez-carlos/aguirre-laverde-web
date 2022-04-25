import styled from '@emotion/styled';

const Title = styled.h2`
    color: ${props => props.color || '#fff'};
    font-family: Regular;
    font-size: ${props => props.fontSize || '95px'};
    font-weight: 400;

`

export default Title;