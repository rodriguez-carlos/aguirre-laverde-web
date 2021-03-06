import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLessThan } from '@fortawesome/free-solid-svg-icons'

const Button = styled.button`
    border: none;
    border-radius: 50%;
    background-size: 200% auto;
    background-image: linear-gradient(to right, #437672 0%, #054340 50%);
    height: 65px;
    width: 65px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px #00000080;
    z-index: 90;
    transition: 0.5s;
    cursor: pointer;

    :hover {
        background-position: right center;
    }

    :active {
        opacity: 50%;
    }

    span {
        font-size: 20px;
    }

    @media (min-width: 650px) {
        height: ${props => props.tiny ? '50px' : '82px'};
        width: ${props => props.tiny ? '50px' : '82px'};
    }
`;

const Icon = styled.div`
    color: #fff;
    font-size: ${props => props.buttonSize || '30px'};
`;


const RoundButton = ({ buttonSize, buttonIcon, className, tinyVersion, isSubmit }) => {
    function renderIcon(iconProp) {
        switch (iconProp) {
            case "plus":
                return <FontAwesomeIcon className='button-icon' icon={faPlus}/>;
            case "back":
                return <FontAwesomeIcon className='button-icon' icon={faLessThan}/>;
            case "enviar":
                return <span>ENVIAR</span>;
            case "ver":
                return <span>VER</span>
            default:
                return "";
        }
    }
    return (
        <Button 
            className={className}
            type={isSubmit ? "submit" : "button"}
            tiny={tinyVersion}
        >
            <Icon size={buttonSize}>
                {renderIcon(buttonIcon)}
            </Icon>
        </Button>
    )
}

export default RoundButton;