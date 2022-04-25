import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLessThan } from '@fortawesome/free-solid-svg-icons'

const Button = styled.button`
    border: none;
    border-radius: 50%;
    background-size: 200% auto;
    background-image: linear-gradient(to right, #437672 0%, #054340 50%);
    height: 82px;
    width: 82px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px #00000070;
    z-index: 90;
    transition: 0.5s;
    cursor: pointer;

    :hover {
        background-position: right center;
    }

    :active {
        opacity: 50%;
    }
`;

const Icon = styled.div`
    color: #fff;
    font-size: ${props => props.buttonSize || '30px'};
`;


const RoundButton = ({ buttonSize, buttonIcon }) => {
    function renderIcon(iconProp) {
        switch (iconProp) {
            case "plus":
                return <FontAwesomeIcon className='button-icon' icon={faPlus}/>;
            case "back":
                return <FontAwesomeIcon className='button-icon' icon={faLessThan}/>;
            case "enviar":
                return <span>ENVIAR</span>;
            default:
                return "";
        }
    }
    return (
        <Button>
            <Icon size={buttonSize}>
                {renderIcon(buttonIcon)}
            </Icon>
        </Button>
    )
}

export default RoundButton;