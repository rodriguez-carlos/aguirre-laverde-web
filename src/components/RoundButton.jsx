import React from 'react';
import "../styles/_roundbutton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLessThan } from '@fortawesome/free-solid-svg-icons'


const RoundButton = ({buttonSize, buttonIcon}) => {
    function iconToRender(iconProp) {
        switch (iconProp) {
            case "plus":
                return <FontAwesomeIcon className='button-icon' icon={faPlus}/>;
                break;
            case "back":
                return <FontAwesomeIcon className='button-icon' icon={faLessThan}/>;
                break;
            case "enviar":
                return <span>ENVIAR</span>;
                break;
        }
    }
    return (
        <div className="round-button">
            <div className="button-icon">
                {iconToRender(buttonIcon)}
            </div>
        </div>
    )
}

export default RoundButton;