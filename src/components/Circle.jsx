import styled from '@emotion/styled';



const CircleElement = styled.div`
  background-color: ${props => props.color || '#124D4A'};
  width: ${props => props.size || '200px'};
  height: ${props => props.size || '200px' };
  opacity: ${props => props.opacity || '1'};
  border-radius: 50%;

  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  z-index: ${props => props.zIndex || 0};

  display: ${props => props.mobile ? 'block' : 'none'};

  @media (min-width: 960px) {
    display: ${props => props.mobile ? 'none' : 'block'};
  }
`;

export default CircleElement;